import express from "express";

const posts = [
    {id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150"
    },
    {id: 2, descricao: "Algo para se ver", imagem: "https://placecats.com/millie/300/150"
    },
    {id: 3, descricao: "Compare e comprove", imagem: "https://placecats.com/millie/300/150"
    }
            
        
];
        
const app = express();
app.use(express.json());

app.listen(3000, ()=>{
    console.log("Servidor escutando...");
});
function buscarPostPorID(id){
    return posts.findIndex((post) =>{
        return post.id === Number(id);
    });
}

app.get("/posts/:id", (req, res)=>{
    const index = buscarPostPorID(req.params.id)
});
