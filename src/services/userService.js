import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

import User from '../models/User.js';

export default {
    async register(userData) {
        if (userData.password !== userData.rePassword) {
            throw new Error('Password Missmatch!');
        }

        const user = await User.findOne({ username: userData.username });

        if (user) {
            throw new Error('User already exists!');
        }

        return User.create(userData);
    },
    async login(username, password) {
        const user = await User.findOne({ username });

        if (!user) {
            throw new Error('No such user exists!');
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            throw new Error('Invalid username or password!');
        }

        const payload = {
            id: user.id,
            username,
        };

        const token = jsonwebtoken.sign(payload, null, { expiresIn: '2h' });
    }
}