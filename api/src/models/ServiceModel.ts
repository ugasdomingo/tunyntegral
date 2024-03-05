//Import tools
import { Schema, model, Document } from 'mongoose';

//Create Service Schema
const serviceSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            required: true,
        },
        coverImage: {
            public_id: {
                type: String,
                required: true,
            },
            secure_url: {
                type: String,
                required: true,
            },
        },
    },
    { timestamps: true }
);

//Export Service Model
export interface IServices extends Document {
    _id: string;
    name: string;
    description: string;
    category: string;
    coverImage: {
        public_id: string;
        secure_url: string;
    };
}

export const ServiceModel = model<IServices>('Service', serviceSchema);
