import getTodosPosts from "../models/postsModel.js";

export async function listarPosts (req, res)  {
    // Define uma rota GET para o caminho "/posts".
    const posts = await getTodosPosts();
    // Chama a função `getTodosPosts` para obter todos os posts e armazena o resultado na variável `posts`.
    res.status(200).json(posts);
    // Envia uma resposta com status 200 (OK) e o array de posts no formato JSON.
}