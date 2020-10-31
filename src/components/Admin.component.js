import React, { useState } from 'react';
import {v4 as uuidv4 } from 'uuid';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { createCar } from '../api/mutations'
import config from '../aws-exports';

const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config;

const Admin = () => {
    const [image, setImage] = useState(null);
    const [carDetails, setCarDetails] = useState({ make: '', model: '', description: '', image: '', price: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!carDetails.make || !carDetails.model || !carDetails.price)
                return;

            await API.graphql(graphqlOperation(createCar, { input: carDetails }))

            setCarDetails({ make: '', model: '', description: '', image: '', price: '' });
        } catch (err) {
            console.error('Error [Creating Car]: ' + err);
        }
    }

    const handleImageUpload = async (e) => {
        e.preventDefault();

        const file = e.target.files[0];
        const name = file.name.split('.')[0];
        const extension = file.name.split('.')[1];
        const key = `images/${uuidv4}${name}.${extension}`;
        const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;

        try {
            // Upload the file to S3 with private access level.
            await Storage.put(key, file, {
                level: 'public',
                contentType: file.type
            });

            // Retrieve the uploaded file to display
            const image = await Storage.get(key, { level: 'public' });
            setImage(image);
            setCarDetails({ ...carDetails, image: url });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section>
            <AmplifyAuthenticator>
                <section>
                    <header>
                        <h3>Add New Car</h3>
                        <AmplifySignOut></AmplifySignOut>
                    </header>
                    <form onSubmit={handleSubmit}>
                        <div className="form-image">
                        {
                            image ? (
                                <img src={image} alt="" />
                            ) : (
                                <input type="file" accept="image/jpg" onChange={(e) => handleImageUpload(e)} />
                            )
                        }
                        </div>
                        <div className="form-fields">
                            <div>
                                <p><label htmlFor="make">Make</label></p>
                                <p><input
                                    name="make"
                                    type="text"
                                    placeholder="Type the make"
                                    onChange={(e) => setCarDetails({ ...carDetails, make: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div>
                                <p><label htmlFor="model">Model</label></p>
                                <p><input
                                    name="model"
                                    type="text"
                                    placeholder="Type the model"
                                    onChange={(e) => setCarDetails({ ...carDetails, model: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div>
                                <p><label htmlFor="description">Description</label></p>
                                <p><textarea
                                    name="description"
                                    type="text"
                                    rows="8"
                                    placeholder="Type the description of the car"
                                    onChange={(e) => setCarDetails({ ...carDetails, description: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div className="price-form">
                                <p><label htmlFor="price">Price ($)</label>
                                    <input
                                        name="price"
                                        type="text"
                                        placeholder="What is the Price of the car (AUD)"
                                        onChange={(e) => setCarDetails({ ...carDetails, price: e.target.value })}
                                        required
                                    />
                                </p>
                            </div>
                            <div className="featured-form">
                                <p><label>Featured?</label>
                                    <input type="checkbox"
                                        className="featured-checkbox"
                                        checked={carDetails.featured}
                                        onChange={() => setCarDetails({ ...carDetails, featured: !carDetails.featured })}
                                    />
                                </p>
                            </div>
                            <div className="submit-form">
                                <button className="btn" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </section>
            </AmplifyAuthenticator>
        </section>
    );
}

export default Admin;