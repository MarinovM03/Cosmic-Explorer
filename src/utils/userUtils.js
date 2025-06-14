import jsonwebtoken from 'jsonwebtoken';

import { JWT_SECRET } from '../config/index.js';

export function generateAuthToken(user) {
    const payload = {
        id: user.id,
        username: user.username,
    };

    const token = jsonwebtoken.sign(payload, JWT_SECRET, { expiresIn: '2h' });

    return token;
}