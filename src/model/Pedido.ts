import mongoose, { Schema, Document } from 'mongoose';

interface IPedido extends Document {
    idCliente: number;
    lista: number[];
    status: string;
}

const PedidoSchema: Schema = new Schema({
    idCliente: { type: Number, required: true },
    lista: { type: String, required: true },
    status: { type: String, required: true },
});

const Pedido = mongoose.model<IPedido>('Pedido', PedidoSchema);

export default Pedido;