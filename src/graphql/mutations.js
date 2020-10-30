/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const drivewayProcessOrder = /* GraphQL */ `
  mutation DrivewayProcessOrder($input: ProcessOrderInput!) {
    drivewayProcessOrder(input: $input)
  }
`;
export const createCar = /* GraphQL */ `
  mutation CreateCar(
    $input: CreateCarInput!
    $condition: ModelCarConditionInput
  ) {
    createCar(input: $input, condition: $condition) {
      id
      make
      model
      description
      image
      author
      featured
      price
      orders {
        items {
          id
          car_id
          order_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCar = /* GraphQL */ `
  mutation UpdateCar(
    $input: UpdateCarInput!
    $condition: ModelCarConditionInput
  ) {
    updateCar(input: $input, condition: $condition) {
      id
      make
      model
      description
      image
      author
      featured
      price
      orders {
        items {
          id
          car_id
          order_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCar = /* GraphQL */ `
  mutation DeleteCar(
    $input: DeleteCarInput!
    $condition: ModelCarConditionInput
  ) {
    deleteCar(input: $input, condition: $condition) {
      id
      make
      model
      description
      image
      author
      featured
      price
      orders {
        items {
          id
          car_id
          order_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCarOrder = /* GraphQL */ `
  mutation CreateCarOrder(
    $input: CreateCarOrderInput!
    $condition: ModelCarOrderConditionInput
  ) {
    createCarOrder(input: $input, condition: $condition) {
      id
      car_id
      order_id
      order {
        id
        user
        date
        total
        cars {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      car {
        id
        make
        model
        description
        image
        author
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateCarOrder = /* GraphQL */ `
  mutation UpdateCarOrder(
    $input: UpdateCarOrderInput!
    $condition: ModelCarOrderConditionInput
  ) {
    updateCarOrder(input: $input, condition: $condition) {
      id
      car_id
      order_id
      order {
        id
        user
        date
        total
        cars {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      car {
        id
        make
        model
        description
        image
        author
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteCarOrder = /* GraphQL */ `
  mutation DeleteCarOrder(
    $input: DeleteCarOrderInput!
    $condition: ModelCarOrderConditionInput
  ) {
    deleteCarOrder(input: $input, condition: $condition) {
      id
      car_id
      order_id
      order {
        id
        user
        date
        total
        cars {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      car {
        id
        make
        model
        description
        image
        author
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      cars {
        items {
          id
          car_id
          order_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      cars {
        items {
          id
          car_id
          order_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      cars {
        items {
          id
          car_id
          order_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
