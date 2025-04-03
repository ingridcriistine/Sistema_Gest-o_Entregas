import mongoose, { Schema, Document } from 'mongoose';

interface ICliente extends Document {
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    endereco: string;
}

const ClienteSchema: Schema = new Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    telefone: { type: String, required: true },
    endereco: { type: String, required: true },
});

const Cliente = mongoose.model<ICliente>('Cliente', ClienteSchema);

export default Cliente;