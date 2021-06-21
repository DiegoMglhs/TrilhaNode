import express, { response } from "express";

//@types/express -D
const app = express();
/**
 * GET    => Buscar uma informação
 * POST   => inserir(criar) uma informação
 * PUT    => Alterar informação
 * DELETE => Deletar um dado
 * PATCH  => Alterar uma informação especifica
 */

app.get("/teste", (request, response) => {
    // Request => tudo que está entrando
    // Response => tudo que está saindo
    return response.send("Olá NLW")
})

app.post("/teste-post", (request, response) => {
    return response.send("OLÁ NLW método POST!")
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is Running NLW"))