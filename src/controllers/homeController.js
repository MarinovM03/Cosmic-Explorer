import { Router } from "express";

const homeController = Router();

homeController.get('/', (req, res) => {
    res.send('It Works | Home Controller');
});

export default homeController;