//Import tools
import { Router } from 'express';
import fileUpload from 'express-fileupload';
import { adminAuth } from '../middlewares/adminAuth';
import { createWork, getWorks } from '../controllers/workControllers';

//Define router
const workRouter = Router();

//Routes
workRouter.post(
    '/',
    fileUpload({
        useTempFiles: true,
        tempFileDir: './uploads',
    }),
    adminAuth,
    createWork
);

workRouter.get('/', getWorks);

//Export routes
export default workRouter;
