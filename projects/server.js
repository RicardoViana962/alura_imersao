
import express from "express";
// Importa o framework Express, que será utilizado para criar a aplicação web.
import routes from "./src/routes/postRoutes.js";

const app = express();
routes(app)
// Cria uma instância do Express, que será o ponto de partida da nossa aplicação.


app.listen(3000, () => {
    console.log("Servidor escutando...");
});
// Inicia o servidor na porta 3000 e exibe uma mensagem no console indicando que o servidor está ouvindo por requisições.





