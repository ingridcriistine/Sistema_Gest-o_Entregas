import { Request, Response } from "express";
import Cliente from '../model/Cliente.ts';
import ClienteService from "../services/clienteService.ts";
import jwt from "jsonwebtoken";
import crypto from "crypto-js";
import dotenv from "dotenv";
import Pedido from "../model/Pedido.ts";

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

        try {
            const pedidos = await Pedido.find({id});
            res.status(200).json(pedidos);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao buscar pedidos', error });
        }
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

    static async login(req: Request, res: Response){
        const {email,senha} = req.body;
        const user = await Cliente.findOne({email});
        let secret = process.env.SECRET?process.env.SECRET:"Ingrid"
        
        if(!user)
            return res.status(400).send({message:"Email ou senha inválidos"});
    
        let verifica = CryptoJS.AES.decrypt(user.senha,secret).toString(CryptoJS.enc.Utf8);

        if(!(senha !== verifica))
            return res.status(400).send({message:"Email ou senha inválidos"});
    
        const token = jwt.sign(
            {
                id:user._id,
            },
            secret as string,
            {
                expiresIn:'2 days'
            }
        );
        return res.status(200).send({token:token})
    }
}
   
export default ClienteController;