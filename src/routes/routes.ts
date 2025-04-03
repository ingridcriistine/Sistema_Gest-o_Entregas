import { Express } from 'express';
import express from 'express'
import cliente from './cliente.ts'
import produto from './produto.ts';

export default function (app: Express) {
    app
        .use(express.json())
        .use('/cliente', cliente)
        .use('/produto', produto)
        // .use('/carriers', carriers)
}