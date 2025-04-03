import { Request, Response } from "express";
import Produto from "../model/Produto.ts";
import ProdutoService from "../services/produtoService.ts";

class ProdutoController {
    
    static async createProduto(req: Request, res: Response): Promise<any> {
        const produto = req.body;
        try {
            const response = await ProdutoService.create(produto);
            console.log(response)
            if(response.response){
                return res.status(201).json({message:response.message});
            }
            return res.status(401).json({message:response.message});
        } catch (error) {
            return res.status(505);
        }
    }

    static async getProdutos(req: Request, res: Response) {
        try {
            const produtos = await Produto.find();
            res.status(200).json(produtos);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao buscar produtos', error });
        }
    }

    static async deleteProduto(req: Request, res: Response) {
        const { id } = req.params;
    
        try {
            const response = await ProdutoService.delete({id:Number(id)});
            if(response.response){
                return res.status(201).json({message:response.message});
            }
            return res.status(401).json({message:response.message});
        } catch (error) {
            return res.status(505);
        }
    }
}
   
export default ProdutoController;