//Import tools
import { Schema, model, Document } from 'mongoose';

//Create Work Schema
const workSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
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

//Export Work Model
export interface IWorks extends Document {
    _id: string;
    title: string;
    coverImage: {
        public_id: string;
        secure_url: string;
    };
    createdAt: string;
    updatedAt: string;
}

export const WorkModel = model<IWorks>('Work', workSchema);
