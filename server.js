// Importa o framework Express, que é a base para criar aplicações web Node.js.
import express from "express";
import routes from "./routes/postsRoutes.js";
import "dotenv/config";
// Cria uma instância do Express, que será o nosso aplicativo.
const app = express();

app.use(express.static("uploads"));

routes(app);

//porta e retorno da porta
app.listen(3000, () => {
  console.log("ouvindo na porta 3000");
});
