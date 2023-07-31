const bodyParser = require('body-parser');
const express = require('express');
const dbConnect = require('./utils/dbconnect');
const productRoute = require('./Routes/hoodie');
const userRoute = require('./Routes/user');
const dotEnv= require('dotenv').config()
const path =require('path')
const app = express();
app.use(bodyParser.json());
app.use('/uploads/images', express.static(path.join('uploads', 'images')));
app.use('/products', productRoute);
app.use('/user', userRoute);
const port = 4000;
dbConnect();
app.listen(port, () => {
  console.log(`App is running on ${port}....`);
});
