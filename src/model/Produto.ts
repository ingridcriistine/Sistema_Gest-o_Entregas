import mongoose, { Schema, Document } from 'mongoose';

interface IProduto extends Document {
    nome: string;
    preco: number;
    estoque: number;
}

const ProdutoSchema: Schema = new Schema({
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    estoque: { type: Number, required: true },
});

const Produto = mongoose.model<IProduto>('Produto', ProdutoSchema);

export default Produto;