import User from '../models/User.js';

export default {
    async register(userData) {
        if (userData.password !== userData.rePassword) {
            throw new Error('Password Missmatch!');
        }

        const user = await User.findOne({ email: userData.email });

        if (user) {
            throw new Error('User already exists!');
        }

        return User.create(userData);
    }
}