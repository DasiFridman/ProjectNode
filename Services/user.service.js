const User = require('../models/userModel');

class UserService {
    static async getUserList() {
        try {
            return await User.find({});
        } catch (error) {
            throw new Error(`Unable to retrieve users: ${error.message}`);
        }
    }

    static async getUser(id) {
        try {
            return await User.findById(id);
        } catch (error) {
            throw new Error(`Unable to retrieve user: ${error.message}`);
        }
    }

    static async getUserByUsername(username, password, number) {
        try {
            return await User.findOne({ username, password, number });
        } catch (error) {
            throw new Error(`Unable to retrieve user: ${error.message}`);
        }
    }

    static async createUser(userData) {
        try {
            const user = new User(userData);
            return await user.save();
        } catch (error) {
            throw new Error(`Unable to create user: ${error.message}`);
        }
    }

    static async updateUser(id, userData) {
        try {
            return await User.findByIdAndUpdate(id, userData, { new: true });
        } catch (error) {
            throw new Error(`Unable to update user: ${error.message}`);
        }
    }
}

module.exports = UserService;
