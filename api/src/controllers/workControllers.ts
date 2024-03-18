//Import tools
import { uploadImage, deleteImage } from '../utils/cloudinary';
import fs from 'fs-extra';
import { WorkModel } from '../models/WorkModel';

//Create Work Controller
export const createWork = async (req: any, res: any) => {
    const { title } = req.body;

    try {
        //Create new Work
        const work = new WorkModel({
            title,
        });

        //Upload Image to Cloudinary
        if (req.files?.coverImage) {
            const result = await uploadImage(req.files.coverImage.tempFilePath);
            work.coverImage = {
                public_id: result.public_id,
                secure_url: result.secure_url,
            };

            await fs.unlink(req.files.coverImage.tempFilePath);
        }

        await work.save();

        return res.status(201).json({ message: 'Trabajo Creado' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};

//Get Works Controller
export const getWorks = async (req: any, res: any) => {
    try {
        //Get Works
        const works = await WorkModel.find();

        return res.status(200).json(works);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};
