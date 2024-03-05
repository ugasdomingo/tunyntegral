//Import tools
import { QuoteModel } from '../models/QuoteModel';

//Create Quote Controller
export const createQuote = async (req: any, res: any) => {
    const { name, email, phone, service, message } = req.body;

    try {
        //Create new Quote
        const quote = new QuoteModel({
            name,
            email,
            phone,
            service,
            message,
        });

        await quote.save();

        return res.status(201).json({ message: 'Cotización Creada' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};

//Get Quotes Controller
export const getQuotes = async (req: any, res: any) => {
    try {
        const quotes = await QuoteModel.find();
        return res.status(200).json(quotes);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};
