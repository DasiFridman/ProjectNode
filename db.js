const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost:27017/dataProject'; // כתובת מסד הנתונים

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});