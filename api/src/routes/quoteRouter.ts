//Import tools
import { Router } from 'express';
import { createQuote, getQuotes } from '../controllers/quoteControllers';

//Define router
const quoteRouter = Router();

//Routes
quoteRouter.post('/', createQuote);

quoteRouter.get('/', getQuotes);

//Export routes
export default quoteRouter;
