import mongoose, { Schema, Document } from 'mongoose';

interface IEntrega extends Document {
    idPedido: number;
    idTransportadora: number;
    status: string;
}

const EntregaSchema: Schema = new Schema({
    idPedido: { type: Number, required: true },
    idTransportadora: { type: Number, required: true },
    status: { type: String, required: true },
});

const Entrega = mongoose.model<IEntrega>('Entrega', EntregaSchema);

export default Entrega;