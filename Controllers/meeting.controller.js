const express = require('express');
const router = express.Router();


router.get('/meetings', async (req, res) => {
    try {
        const meetings = await meetingService.getMeetings();
        res.send(meetings);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/meetings/:orderNumber', async (req, res) => {
    try {
        const orderNumber = req.params.orderNumber;
        const meeting = await meetingService.getMeeting(orderNumber);
        if (meeting)
            res.json(meeting);
        else
            res.status(404).json({ message: 'this order number not exist' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/meetings', async (req, res) => {
    try {
        const newMeeting = req.body;
        await meetingService.createMeeting(newMeeting);
        res.status(201).json(newMeeting);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.put('/meetings/:orderNumber', async (req, res) => {
    try {
        const orderNumber = req.params.orderNumber;
        const updateMeeting = req.body;
        await meetingService.updateMeeting(updateMeeting);
        res.json(updateMeeting);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.delete('/meetings/:orderNumber', async (req, res) => {
    try {
        const orderNumber = req.params.orderNumber;
        await meetingService.delete(orderNumber);
        res.status(200).json({ message: 'deleted' })
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
})