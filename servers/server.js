const bodyParser = require('body-parser');
const express = require('express');
const dbConnect = require('./utils/dbconnect');
const productRoute = require('./Routes/hoodie');
const userRoute = require('./Routes/user');
const app = express();
app.use(bodyParser.json());

app.use('/products', productRoute);
app.use('/user', userRoute);
const port = 4000;
dbConnect();
app.listen(port, () => {
  console.log(`App is running on ${port}....`);
});
