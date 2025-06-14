import { Router } from "express";

const userController = Router();

userController.get('/register', (req, res) => {
    res.render('user/register');
});

userController.post('/register', (req, res) => {
    console.log(req.body);
    
    res.redirect('/');
});

export default userController;