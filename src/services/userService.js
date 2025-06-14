import bcrypt from 'bcrypt';

import User from '../models/User.js';
import { generateAuthToken } from '../utils/userUtils.js';

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

        const token = generateAuthToken(user);
        
        return token;
    }
}