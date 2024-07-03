const express = require('express');
require('./db'); // חיבור ל-DB
const userRouter = require('../ProjectNode/Controllers/user.controller'); // הקובץ של ה-controller

const app = express(); // אתחול app
app.use(express.json()); // Middleware לפענוח JSON

app.use('/api', userRouter); // כל הנתיבים יתחילו ב-`/api`

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
