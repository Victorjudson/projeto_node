import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";
// A variável 'conexao' armazena a conexão com o banco de dado
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPost() {
  const db = conexao.db("imersao-alura-banckEnd");
  // Seleciona o banco de dados com o nome "imersao-alura-banckEnd".
  const colecao = db.collection("posts");
  // Seleciona a coleção "posts" dentro do banco de dados.
  return colecao.find().toArray();
}
// Função assíncrona que retorna todos os posts de uma coleção específica do banco de dados.

export async function criarPost(novoPost) {
  const db = conexao.db("imersao-alura-banckEnd");
  const colecao = db.collection("posts");
  return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
  const db = conexao.db("imersao-alura-banckEnd");
  const colecao = db.collection("posts");
  const objId = ObjectId.createFromHexString(id);
  return colecao.updateOne({ _id: new ObjectId(objId) }, { $set: novoPost });
}
