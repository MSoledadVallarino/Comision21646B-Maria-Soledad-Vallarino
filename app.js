import express from "express";
import { postRouter } from "./src/routes/post.routes.js";
import { startDatabase } from "./src/config/database.js";

const app = express();
app.use(express.json())

const port = 3000;
app.use("/", postRouter)


app.listen(port, () => {
    console.log(`Servidor escuchando en http//:localhost:${port}`)
    startDatabase()
})