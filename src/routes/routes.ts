import { Express } from 'express';
import express from 'express'
import cliente from './cliente.ts'
import produto from './produto.ts';
import pedido from './pedido.ts';
import carriers from './carriers.ts';

export default function (app: Express) {
    app
        .use(express.json())
        .use('/cliente', cliente)
        .use('/produto', produto)
        .use('/pedido', pedido)
        .use('/carriers', carriers)
        // .use('/entrega', entrega)
}