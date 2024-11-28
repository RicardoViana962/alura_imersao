import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Cria uma conexão com o banco de dados usando a string de conexão obtida da variável de ambiente `STRING_CONEXAO`. 
// A palavra-chave `await` indica que a função é assíncrona e aguarda a conclusão da conexão antes de continuar.


export default async function getTodosPosts() {
    // Função assíncrona responsável por buscar todos os posts do banco de dados.
    const db = conexao.db("imersao_alura");
    // Obtém o banco de dados chamado "imersao_alura" a partir da conexão estabelecida.
    const colecao = db.collection("posts");
    // Obtém a coleção "posts" dentro do banco de dados.
    return colecao.find().toArray();
    // Executa uma consulta para encontrar todos os documentos da coleção e retorna os resultados em um array.
}