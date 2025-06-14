import { AUTH_COOKIE_NAME } from "../config/index.js";

export function auth(req, res, next) {
    const token = req.cookies[AUTH_COOKIE_NAME];

    next();
}