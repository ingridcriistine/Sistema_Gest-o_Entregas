import express, { Request, Response, Router } from 'express';
import PedidoController from '../controllers/PedidoController.ts';

export default express.Router()
    .post('/orders',(req,res)=>{
        try{
            PedidoController.createPedido(req,res);
        }catch(e){
            res.status(500);
        }
    })
    .get('/orders?status=pendente',(req,res)=>{
        try{
            PedidoController.getPedidos(req,res);
        }catch(e){
            res.status(500);
        }
    })
    .put('/orders/:id/cancel',(req,res)=>{
        try{
            PedidoController.updatePedido(req,res);
        }catch(e){
            res.status(500);
        }
    })
    
