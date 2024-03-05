//Import tools
import { Router } from 'express';
import { dataAuthValidation } from '../middlewares/dataAuthValidation';
import {
    register,
    login,
    refresh,
    logout,
} from '../controllers/userControllers';

//Define router
const authRouter = Router();

//Routes
authRouter.post('/register', dataAuthValidation, register);

authRouter.post('/login', dataAuthValidation, login);

authRouter.get('/refresh', refresh);

authRouter.get('/logout', logout);

//Export routes
export default authRouter;
