import mongoose from 'mongoose';

export const connect = async () => {
    await mongoose.connect('mongodb+srv://SK:123@cluster0.ed5xdwi.mongodb.net/');
}
