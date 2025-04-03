import { Request,Response } from 'express';
import DeleteDto from '../dto/deleteDto.ts';
import axios from 'axios'
import Cliente from '../model/Cliente.ts';
import jwt from "jsonwebtoken";
import crypto from "crypto-js";
import dotenv from "dotenv";
import PedidoDto from '../dto/pedidoDto.ts';
import Pedido from '../model/Pedido.ts';


export default class PedidoService{

    static async create(data:PedidoDto):Promise<{response:boolean, message:string}>{

        const newPedido = new Pedido(data);
        await newPedido.save();
        
        return {response:true, message:"Pedido cadastrado com sucesso!"}

    }

    static async update(data:DeleteDto):Promise<{response:boolean, message:string}>{

        const id = data.id;
        const pedido = await Pedido.findByIdAndUpdate({id});
        
        return {response:true, message:"Pedido cancelado com sucesso!"}
    }
}