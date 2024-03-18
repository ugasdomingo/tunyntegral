//Import Tools
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

//Import Routes
import authRouter from './src/routes/authRouter';
import serviceRouter from './src/routes/serviceRouter';
import quoteRouter from './src/routes/quoteRouter';
import workRouter from './src/routes/workRouter';

//Define app
const app = express();

const allowedOrigins = [
    process.env.ORIGIN1 as string,
    process.env.ORIGIN2 as string,
    process.env.ORIGIN3 as string,
];

//Middleware
app.use(
    cors({
        origin: function (origin: any, callback: any) {
            if (allowedOrigins.includes(origin)) {
                return callback(null, origin);
            }
            return callback(
                'Error CORS, origin: ' + origin + ', No autorizado'
            );
        },
        credentials: true,
    })
);
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

//Routes
app.use('/v1/api/', authRouter);
app.use('/v1/api/services', serviceRouter);
app.use('/v1/api/quotes', quoteRouter);
app.use('/v1/api/works', workRouter);

//Export app
export default app;
