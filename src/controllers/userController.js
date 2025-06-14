import { Router } from "express";
import userService from "../services/userService.js";

const userController = Router();

userController.get('/register', (req, res) => {
    res.render('user/register');
});

userController.post('/register', async (req, res) => {
    const userData = req.body;

    const token = await userService.register(userData);

    res.cookie('auth', token);

    res.redirect('/');
});

userController.get('/login', (req, res) => {
    res.render('user/login');
});

userController.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const token = await userService.login(username, password);

    res.cookie('auth', token);

    res.redirect('/');
});

userController.get('/logout', (req, res) => {
    res.clearCookie('auth');
    
    res.redirect('/');
});

export default userController;