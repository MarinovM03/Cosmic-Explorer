import { Router } from "express";
import userService from "../services/userService.js";

const userController = Router();

userController.get('/register', (req, res) => {
    res.render('user/register');
});

userController.post('/register', async (req, res) => {
    const userData = req.body;

    await userService.register(userData);

    res.redirect('/');
});

userController.get('/login', (req, res) => {
    res.render('user/login');
});

userController.post('/login', async (req, res) => {
    const loginData = req.body;

    await userService.login(loginData);

    res.render('/');
});

export default userController;