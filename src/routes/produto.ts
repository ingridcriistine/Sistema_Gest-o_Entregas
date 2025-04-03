import express, { Request, Response, Router } from 'express';
import ProdutoController from '../controllers/ProdutoController.ts';

export default express.Router()
    .post('/products',(req,res)=>{
        try{
            ProdutoController.createProduto(req,res);
        }catch(e){
            res.status(500);
        }
    })
    .get('/products',(req,res)=>{
        try{
            ProdutoController.getProdutos(req,res);
        }catch(e){
            res.status(500);
        }
    })
    .delete('/products/:id',(req,res)=>{
        try{
            ProdutoController.deleteProduto(req,res);
        }catch(e){
            res.status(500);
        }
    })
    
