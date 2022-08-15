import mongoose from 'mongoose';
import validator from 'validator';

const BankCard = mongoose.model('Bankcard', {
    number: {
        type: String,
        required: true,
        trim: true
    },
    expiration_date: {
        type: String,
        required: true,
        trim: true
    },
    cvc: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    }
});

export { BankCard as default };