import mongoose from 'mongoose';

export default mongoose.connect('mongodb://127.0.0.1:27017/payment-gateway', {
    useNewUrlParser: true
});