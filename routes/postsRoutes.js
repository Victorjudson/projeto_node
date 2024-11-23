import cors from "cors";
import express from "express";
import multer from "multer";
import { atualizarNovoPost, listarPosts, postarNovoPost, uploadImagem } from "../src/controlles/postsController.js";


const corsOptions = {
  origin:"http://localhost:8000",
  optionsSuccessStatus: 200
}



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ dest: "./uploads", storage });

const routes = (app) => {
  // Habilita o middleware express.json() para que o aplicativo possa entender requisições com corpo em formato JSON.
  // Isso é essencial para receber dados de formulários ou de outras APIs.
  app.use(express.json());
  app.use(cors(corsOptions));
  //rotas
  app.get("/posts", listarPosts);

  app.post("/posts", postarNovoPost);

  app.post("/upload", upload.single("imagem"), uploadImagem);

  app.put("/upload/:id", atualizarNovoPost);
};
export default routes;
