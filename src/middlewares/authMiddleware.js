export function auth(req, res, next) {
    const token = req.cookies['auth'];

    next();
}