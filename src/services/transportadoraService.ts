import { Request,Response } from 'express';
import DeleteDto from '../dto/deleteDto.ts';
import axios from 'axios'
import jwt from "jsonwebtoken";
import crypto from "crypto-js";
import dotenv from "dotenv";
import TransportadoraDto from '../dto/TransportadoraDto.ts';
import Transportadora from '../model/Transportadora.ts';


export default class TransportadoraService{

    static async create(data:TransportadoraDto):Promise<{response:boolean, message:string}>{
        const nome = data.nome;
        const cnpj = data.cnpj;

        const transportadora = Transportadora.findOne({nome});

        if(transportadora != null)
            return {response:false, message:"Transportadora já cadastrada"}
        
        if((typeof cnpj !== "number") || cnpj < 15) {
            return {response:false, message:"Transportadora já cadastrada"}
        }

        const newTransportadora = new Transportadora(data);
        await newTransportadora.save();
        
        return {response:true, message:"Transportadora cadastrada com sucesso!"}

    }
}