const express = require('express');
const businesService = require('../services/business.service');
const router = express.Router();

router.get('/business', async (req, res) => {
    try {
        const business = await businesService.getbusinesList();
        res.json(business);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get('/business:id', async (req, res) => {
    try {
        const id = req.params.id;
        const busines = await businesService.getbusines(id);
        res.json(busines);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/business', async (req, res) => {
    try {
        const {busines} = req.body;
        const businesNew = await businesService.addBusines(busines);
        res.send(businesNew); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/business/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { busines } = req.body;  
        const updatedBusines = await businesService.updatebusines(id, busines);
        res.json(updatedBusines);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/business/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await businesService.deletebusines(id);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;