import { Request, Response } from "express";
import PedidoService from "../services/pedidoService.ts";
import Pedido from "../model/Pedido.ts";

class PedidoController {
    
    static async createPedido(req: Request, res: Response): Promise<any> {
        const pedido = req.body;
        try {
            const response = await PedidoService.create(pedido);
            console.log(response)
            if(response.response){
                return res.status(201).json({message:response.message});
            }
            return res.status(401).json({message:response.message});
        } catch (error) {
            return res.status(505);
        }
    }

    static async getPedidos(req: Request, res: Response) {
        const { status } = req.params;

        try {
            const pedidos = await Pedido.find({status});
            res.status(200).json(pedidos);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao buscar pedidos', error });
        }
    }

    static async updatePedido(req: Request, res: Response) {
        const { id } = req.params;
    
        try {
            const response = await PedidoService.update({id:Number(id)});
            if(response.response){
                return res.status(201).json({message:response.message});
            }
            return res.status(401).json({message:response.message});
        } catch (error) {
            return res.status(505);
        }
    }
}
   
export default PedidoController;