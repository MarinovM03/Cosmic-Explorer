import util from 'util';
import jsonwebtoken from 'jsonwebtoken';

import { JWT_SECRET } from '../config/index.js';

const sign = util.promisify(jsonwebtoken.sign);

export async function generateAuthToken(user) {
    const payload = {
        id: user.id,
        username: user.username,
    };

    const token = await sign(payload, JWT_SECRET, { expiresIn: '2h' });

    return token;
}