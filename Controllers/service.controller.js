const express = require('express');
const router = express.Router();


router.get('/services', async (req, res) => {
    const services = await serviceService.getServices();
    res.send(services);
});

router.get('/services/:id', async (req, res) => {
    const id = req.params.id;
    const service = await serviceService.getService(id);
    if (service)
        res.json(service);
    else
        res.status(404).json({ message: 'this id not exist' });
});

router.post('/services', async (req,res)=>{
    const newService = req.body;
    await serviceService.createService(newService);
    res.status(201).json(newService);
})

router.put('/services/:id', async (req,res) =>{
    const id = req.params.id;
    const updateService = req.body;
    await serviceService.updateService(updateService);
    res.json(updateService);
})

router.delete('/services/:id', async (req,res)=>{
    const id = req.params.id;
    await serviceService.delete(id);
    res.status(200).json({message: 'deleted'})
})