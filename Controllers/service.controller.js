const express = require('express');
const router = express.Router();


router.get('/services', async (req, res) => {
    try {
        const services = await serviceService.getServices();
        res.send(services);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/services/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const service = await serviceService.getService(id);
        if (service)
            res.json(service);
        else
            res.status(404).json({ message: 'this id not exist' });
    }
    catch (error) {
        res.status(500).json(error.message)
    }
});

router.post('/services', async (req, res) => {
    try {

        const newService = req.body;
        await serviceService.createService(newService);
        res.status(201).json(newService);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.put('/services/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateService = req.body;
        await serviceService.updateService(updateService);
        res.json(updateService);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.delete('/services/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await serviceService.delete(id);
        res.status(200).json({ message: 'deleted' })
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
})