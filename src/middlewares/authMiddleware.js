import jsonwebtoken from 'jsonwebtoken';

import { AUTH_COOKIE_NAME, JWT_SECRET } from "../config/index.js";

export function auth(req, res, next) {
    const token = req.cookies[AUTH_COOKIE_NAME];

    if (!token) {
       return next();
    }

    try {
        const user = jsonwebtoken.verify(token, JWT_SECRET);
        
        req.user = user;
        res.locals.user = user;
        res.locals.isAuthenticated = true;

        next();
    } catch (err) {
        res.clearCookie(AUTH_COOKIE_NAME);

        res.redirect('/users/login');
    }
}