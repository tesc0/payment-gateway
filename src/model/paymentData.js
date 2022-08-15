import mongoose from 'mongoose';

const PaymentData = mongoose.model('PaymentData', {
    data: {
        type: String,
        required: true,
        trim: true
    },
    created_at: {
        type: Date,
        required: true,
        trim: true
    },
});

export { PaymentData as default };