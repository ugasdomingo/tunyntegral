//Import tools
import { ServiceModel } from '../models/ServiceModel';
import { uploadImage, deleteImage } from '../utils/cloudinary';
import fs from 'fs-extra';

//Create Service Controller
export const createService = async (req: any, res: any) => {
    const { name, description, category } = req.body;

    try {
        //Create new Service
        const service = new ServiceModel({
            name,
            description,
            category,
        });

        //Upload Image to Cloudinary
        if (req.files?.coverImage) {
            const result = await uploadImage(req.files.coverImage.tempFilePath);
            service.coverImage = {
                public_id: result.public_id,
                secure_url: result.secure_url,
            };

            await fs.unlink(req.files.coverImage.tempFilePath);
        }

        await service.save();

        return res.status(201).json({ message: 'Servicio Creado' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};

//Get Services Controller
export const getServices = async (req: any, res: any) => {
    try {
        const services = await ServiceModel.find();
        return res.status(200).json(services);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};

//Get Service by Category Controller
export const getServiceByCategory = async (req: any, res: any) => {
    const { category } = req.params;
    try {
        const services = await ServiceModel.find({ category });
        return res.status(200).json(services);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};

//Delete Service Controller
export const deleteService = async (req: any, res: any) => {
    const { id } = req.params;
    try {
        const service = await ServiceModel.findByIdAndDelete(id);
        if (service?.coverImage) {
            await deleteImage(service.coverImage);
        }
        return res.status(200).json({ message: 'Servicio Eliminado' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};

//Update Service Controller
export const updateService = async (req: any, res: any) => {
    const { id } = req.params;
    const { name, description, category } = req.body;
    try {
        await ServiceModel.findByIdAndUpdate(id, {
            name,
            description,
            category,
        });
        return res.status(200).json({ message: 'Servicio Actualizado' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};
