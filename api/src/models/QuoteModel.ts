//Import tools
import { Schema, model, Document } from 'mongoose';

//Create Quote Schema
const quoteSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        phone: {
            type: String,
            required: true,
        },
        service: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

//Export Quote Model
export interface IQuote extends Document {
    _id: string;
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}

export const QuoteModel = model<IQuote>('Quote', quoteSchema);
