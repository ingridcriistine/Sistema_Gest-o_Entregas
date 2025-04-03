import express, { Request, Response, Router } from 'express';
import ClienteController from '../controllers/ClienteController.ts';

export default express.Router()
    .post('/customers',(req,res)=>{
        try{
            ClienteController.createCliente(req,res);
        }catch(e){
            res.status(500);
        }
    })
    .get('/customers/:id/orders',(req,res)=>{
        try{
            ClienteController.getOrders(req,res);
        }catch(e){
            res.status(500);
        }
    })
    .delete('/customers/:id',(req,res)=>{
        try{
            ClienteController.deleteCliente(req,res);
        }catch(e){
            res.status(500);
        }
    })

    .post('/customers/login',(req,res)=>{
        try{
            ClienteController.login(req,res);
        }catch(e){
            res.status(500);
        }

})
    
