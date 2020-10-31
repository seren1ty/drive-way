const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

const ORDER_TABLE = 'Order-6cdkfasg3zgpvkvkz5gjbd2rka-production';
const ORDER_TYPE = 'Order';
const CAR_ORDER_TABLE = 'CarOrder-6cdkfasg3zgpvkvkz5gjbd2rka-production';
const CAR_ORDER_TYPE = 'CarOrder';

const createOrder = async (payload) => {
    const { order_id, username, email, total } = payload;

    var params = {
        TableName: ORDER_TABLE,
        Item: {
            id: order_id,
            __typename: ORDER_TYPE,
            customer: email,
            user: username,
            total: total,
            updatedAt: new Date().toISOString(),
            createdAt: new Date().toISOString()
        }
    };

    console.log(params);

    await documentClient.put(params).promise();
};

const createCarOrder = async (payload) => {
    let carOrders = [];

    for (let i = 0; i < payload.cart.length; i++) {
        const cartItem = payload.cart[i];
        carOrders.push({
            PutRequest: {
                Item: {
                    id: uuidv4(),
                    __typename: CAR_ORDER_TYPE,
                    car_id: cartItem.id,
                    order_id: payload.order_id,
                    customer: payload.email,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                }
            }
        });
    }

    let params = {
        RequestItems: {}
    };

    params['RequestItems'][CAR_ORDER_TABLE] = carOrders;

    console.log(params);

    await documentClient.batchWrite(params).promise();
}

// 1. Get order details from processPayment lambda
// 2. Create an order
// 3. Link cars to the order - Users can see the past orders and admins can view orders by user
// 4. Email the invoice (TODO)
exports.handler = async (event) => {
    try {
        let payload = event.prev.result;
        payload.order_id = uuidv4();

        // Create a new order
        await createOrder(payload);

        // Links cars with the order
        await createCarOrder(payload);

        // TODO - add another function to email the invoice to the user

        return 'SUCCESS';
    } catch (err) {
        console.log(err);
        return new Error(err);
    }
};
