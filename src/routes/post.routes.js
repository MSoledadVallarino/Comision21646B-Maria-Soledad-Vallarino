import { Router } from "express";
import { ctrlCreatePost, ctrlDeletePost, ctrlGetPost, ctrlUpdatePost } from "../controllers/task.controllers.js";

const postRouter = Router();

// endpoint para traer todas las tareas
postRouter.get('/api/tasks', ctrlGetPost)

// endpoint para crear una tarea
postRouter.post('/api/tasks', ctrlCreatePost)

// endpoint para modificar una tarea
postRouter.put('/api/tasks/:id',  ctrlUpdatePost)

// endpoint para eliminar una tarea
postRouter.delete('/api/tasks/:id', ctrlDeletePost)

export { postRouter }