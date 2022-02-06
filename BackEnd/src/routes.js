import { Router } from 'express'

const routes = new Router()

import listas from "./app/controllers/ListaController"

routes.get("/listas", listas.index)
routes.get("/listas/:id", listas.exibir)
routes.post("/listas", listas.create)
routes.put("/listas/:id", listas.update)
routes.delete("/listas/:id", listas.Excluir)

export default routes