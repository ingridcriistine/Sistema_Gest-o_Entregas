import { Request, Response } from "express";
import Cliente from '../model/Cliente.ts';
import ClienteService from "../services/clienteService.ts";

class ClienteController {
    
    static async createCliente(req: Request, res: Response): Promise<any> {
        const cliente = req.body;
        try {
            const response = await ClienteService.create(cliente);
            console.log(response)
            if(response.response){
                return res.status(201).json({message:response.message});
            }
            return res.status(401).json({message:response.message});
        } catch (error) {
            return res.status(505);
        }
    }

    static async getOrders(req: Request, res: Response) {
        const { id } = req.params;

        // try {
        //     const cliente = await Cliente.find();
        //     res.status(200).json(cliente);
        // } catch (error) {
        //     res.status(400).json({ message: 'Erro ao buscar pessoas', error });
        // }
    }

    static async deleteCliente(req: Request, res: Response) {
        const { id } = req.params;
    
        try {
            const response = await ClienteService.delete({id:Number(id)});
            if(response.response){
                return res.status(201).json({message:response.message});
            }
            return res.status(401).json({message:response.message});
        } catch (error) {
            return res.status(505);
        }
    }
}
   
export default ClienteController;