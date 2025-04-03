import { Request,Response } from 'express';
import ClienteDto from '../dto/clienteDto.ts';
import DeleteDto from '../dto/deleteDto.ts';
import axios from 'axios'
import Cliente from '../model/Cliente.ts';
import jwt from "jsonwebtoken";
import crypto from "crypto-js";
import dotenv from "dotenv";


export default class ClienteService{

    static async create(data:ClienteDto):Promise<{response:boolean, message:string}>{
        const nome = data.nome;

        const cliente = Cliente.findOne({nome});

        // if(cliente != null)
        //     return {response:false, message:"Cliente já cadastrado"}
        
        // const passwordCrypt = crypto.AES.encrypt(data.senha, process.env.SECRET as string).toString()
        // data.senha = passwordCrypt;

        
        const newCliente = new Cliente(data);
        await newCliente.save();
        
        return {response:true, message:"Cliente cadastrado com sucesso!"}

    }

    static async delete(data:DeleteDto):Promise<{response:boolean, message:string}>{
        
        const cliente = await Cliente.findByIdAndDelete(data.id);

        if (!cliente) {
            return {response:false, message:"Cliente não encontrado."}
        }

        return {response:true, message:"Cliente deletado com sucesso!"}
    }
}