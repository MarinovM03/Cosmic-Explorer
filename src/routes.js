import { Router } from "express";

import homeController from "./controllers/homeController.js";

const routes = Router();

routes.use(homeController);

export default routes;