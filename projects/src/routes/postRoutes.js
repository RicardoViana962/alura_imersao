import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    app.use(express.json());
// Habilita o middleware `express.json()` para que a aplicação possa entender requisições com corpo no formato JSON.
app.get("/posts", listarPosts);  
}

export default routes;