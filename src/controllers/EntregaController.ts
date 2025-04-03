import { Request, Response } from "express";
import Entrega from "../model/Entrega.ts";
import EntregaService from "../services/entregaService.ts";

class EntregaController {
    
    static async createEntrega(req: Request, res: Response): Promise<any> {
        const entrega = req.body;
        try {
            const response = await EntregaService.create(entrega);
            console.log(response)
            if(response.response){
                return res.status(201).json({message:response.message});
            }
            return res.status(401).json({message:response.message});
        } catch (error) {
            return res.status(505);
        }
    }
}
   
export default EntregaController;