require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(fileUpload({
    useTempFiles: true
}))

//router
app.use('/user', require('./routers/userRouter.js'))

//connect to mongodb
const URI = process.env.MONGODB_URL;

const PORT = process.env.PORT || 5000;


mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => {
        console.log('Connected to DB');
        app.listen(PORT, () => {
            console.log('Server is up and running: ', `http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log('Error connecting to DB:', err);
    });

app.get('/', (req, res) => {
    res.json({ msg: 'Welcomme to the ecommerce WebSite !' })
});