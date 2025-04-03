import express, { Request, Response, Router } from 'express';
import TransportadoraController from '../controllers/TransportadoraController.ts';

export default express.Router()
    .post('/carriers',(req,res)=>{
        try{
            TransportadoraController.createTransportadora(req,res);
        }catch(e){
            res.status(500);
        }
    })
    .get('/carriers/:id/deliveries',(req,res)=>{
        try{
            TransportadoraController.getEntregas(req,res);
        }catch(e){
            res.status(500);
        }
    })
    
