import { Request,Response } from 'express';
import ProdutoDto from '../dto/produtoDto.ts';
import DeleteDto from '../dto/deleteDto.ts';
import Produto from '../model/Produto.ts';
import Pedido from '../model/Pedido.ts';


export default class ProdutoService{

    static async create(data:ProdutoDto):Promise<{response:boolean, message:string}>{
        
        const newProduto = new Produto(data);
        await newProduto.save();
        
        return {response:true, message:"Produto cadastrado com sucesso!"}

    }

    static async delete(data:DeleteDto):Promise<{response:boolean, message:string}>{
        const id = data.id;

        const produto = await Produto.findByIdAndDelete(data.id);
        const pedido = await Pedido.findOne({id});

        if (!produto) {
            return {response:false, message:"Produto não encontrado."}
        }

        if (pedido != null) {
            return {response:false, message:"Impossível excluir produtos vinculados à pedidos."}
        }

        return {response:true, message:"Produto deletado com sucesso!"}
    }
}