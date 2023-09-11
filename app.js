import express from "express";
import { postRouter } from "./src/routes/post.routes";
const app = express();
app.use(express.json())

const port = 3000;
app.use("/", taskRouter)


app.listen(port, () => {
    console.log(`Servidor escuchando en http//:localhost:${port}`)
})