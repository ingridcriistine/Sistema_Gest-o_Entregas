import { Request, Response } from "express";
import TransportadoraService from "../services/transportadoraService.ts";
import Transportadora from "../model/Transportadora.ts";
import Entrega from "../model/Entrega.ts";

class TransportadoraController {
    
    static async createTransportadora(req: Request, res: Response): Promise<any> {
        const transportadora = req.body;
        try {
            const response = await TransportadoraService.create(transportadora);
            console.log(response)
            if(response.response){
                return res.status(201).json({message:response.message});
            }
            return res.status(401).json({message:response.message});
        } catch (error) {
            return res.status(505);
        }
    }

    static async getEntregas(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const entregas = await Entrega.find({id});
            res.status(200).json(entregas);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao buscar entregas', error });
        }
    }
}
   
export default TransportadoraController;