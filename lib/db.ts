
import mongoose from 'mongoose';

export const ConnectDB = async () => {
    const mongoDbUri = process.env.MONGO_DB
    if (!mongoDbUri) {
        throw new Error('mongoDb URI is not provided')
    }
    try {
        mongoose.connect(mongoDbUri);
        console.log("🎉 connected to database successfully");
    } catch (error) {
        console.error(error);
    }
};

