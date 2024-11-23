import fetch from 'node-fetch';
import { getTodosPost, criarPost, atualizarPost } from "../models/postsModel.js";
import fs from "fs";
import gerarDescricaoComGemini from "../services/geminiServices.js";

// ... seu código usando fetch

// Define uma função assíncrona para listar todos os posts.
export async function listarPosts(req, res) {
  // Chama a função 'getTodosPost' para obter todos os posts do banco de dados.
  const posts = await getTodosPost();

  // Envia a lista de posts como uma resposta JSON com status 200 (OK).
  res.status(200).json(posts);
}

// Define uma função assíncrona para criar um novo post.
export async function postarNovoPost(req, res) {
  // Obtém os dados do novo post a partir do corpo da requisição.
  const novoPost = req.body;

  try {
    // Chama a função 'criarPost' para salvar o novo post no banco de dados.
    const postCriado = await criarPost(novoPost);

    // Envia o post criado como uma resposta JSON com status 200 (OK).
    res.status(200).json(postCriado);
  } catch (err) {
    // Loga o erro no console se ocorrer uma falha ao criar o post.
    console.error(err.message);

    // Envia uma mensagem de erro com status 500 (Erro interno do servidor).
    res.status(500).json({ Error: "Falha na requisição" });
  }
}

// Define uma função assíncrona para fazer upload de uma imagem e criar um post associado.
export async function uploadImagem(req, res) {
  // Cria um objeto para o novo post com uma descrição, URL da imagem e texto alternativo.
  const novoPost = {
    descricao: "",
    imUrl: req.file.originalname, // Nome original do arquivo enviado.
    alt: "",
  };

  try {
    // Salva o novo post no banco de dados.
    const postCriado = await criarPost(novoPost);

    // Define o caminho onde a imagem será armazenada no servidor.
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;

    // Renomeia o arquivo enviado para associá-lo ao ID do post.
    fs.renameSync(req.file.path, imagemAtualizada);

    // Envia o post criado como uma resposta JSON com status 200 (OK).
    res.status(200).json(postCriado);
  } catch (err) {
    // Loga o erro no console se ocorrer uma falha ao processar a imagem ou criar o post.
    console.error(err.message);

    // Envia uma mensagem de erro com status 500 (Erro interno do servidor).
    res.status(500).json({ Error: "Falha na requisição" });
  }
}

export async function atualizarNovoPost(req, res) {
  const id = req.params.id;
  const urlImg = `http://localhost:3000/${id}.png`;

  try {
    
    const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
    const descricao = await gerarDescricaoComGemini(imgBuffer);
    const post = {
      img: urlImg,
      descricao: descricao,
      alt: req.body.alt
    };

    const postCriado = await atualizarPost(id, post);
    res.status(200).json(postCriado);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ Error: "Falha na requisição" });
  }
}
