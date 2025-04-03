import { Request,Response } from 'express';
import DeleteDto from '../dto/deleteDto.ts';
import axios from 'axios'
import EntregaDto from '../dto/entregaDto.ts';
import Entrega from '../model/Entrega.ts';
import StatusDto from '../dto/statusDto.ts';


export default class EntregaService{

    static async create(data:EntregaDto):Promise<{response:boolean, message:string}>{

        const newEntrega = new Entrega(data);
        await newEntrega.save();
        
        return {response:true, message:"Entrega criada com sucesso!"}

    }

    static async update(data:StatusDto):Promise<{response:boolean, message:string}>{

        const id = data.id;
        const entrega = await Entrega.findByIdAndUpdate({id});
        
        return {response:true, message:"Status da entrega atualizado com sucesso!"}
    }
}