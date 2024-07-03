const express = require('express');
const UserService = require('../Services/user.service');
const router = express.Router();

router.get('/users', async (req, res) => {
    try {
        const users = await UserService.getUserList();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserService.getUser(id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/signin', async (req, res) => {
    try {
        const { username, password, number } = req.body;
        const user = await UserService.getUserByUsername(username, password, number);
        res.send(user); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/users', async (req, res) => {
    try {
        const userData = req.body;
        const newUser = await UserService.createUser(userData);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = req.body;  
        const updatedUser = await UserService.updateUser(id, user);
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
