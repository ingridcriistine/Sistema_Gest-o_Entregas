import mongoose, { Schema, Document } from 'mongoose';

interface IProduto extends Document {
    nome: string;
    preco: number;
    estoque: string;
}

const ProdutoSchema: Schema = new Schema({
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    estoque: { type: String, required: true },
});

const Produto = mongoose.model<IProduto>('Produto', ProdutoSchema);

export default Produto;