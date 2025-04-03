import mongoose, { Schema, Document } from 'mongoose';

interface ITransportadora extends Document {
    nome: string;
    cnpj: number;
    tipo_transporte: string;
}

const TransportadoraSchema: Schema = new Schema({
    nome: { type: String, required: true },
    cnpj: { type: Number, required: true },
    tipo_transporte: { type: String, required: true }
});

const Transportadora = mongoose.model<ITransportadora>('Transportadora', TransportadoraSchema);

export default Transportadora;