//Import tools
import { Router } from 'express';
import fileUpload from 'express-fileupload';
import { adminAuth } from '../middlewares/adminAuth';
import {
    createService,
    getServices,
    getServiceByCategory,
    deleteService,
    updateService,
} from '../controllers/serviceControllers';

//Define router
const serviceRouter = Router();

//Routes
serviceRouter.post(
    '/',
    fileUpload({
        useTempFiles: true,
        tempFileDir: './uploads',
    }),
    adminAuth,
    createService
);

serviceRouter.get('/', getServices);

serviceRouter.get('/get/:category', getServiceByCategory);

serviceRouter.delete('/:id', adminAuth, deleteService);

serviceRouter.put('/:id', adminAuth, updateService);

//Export routes
export default serviceRouter;
