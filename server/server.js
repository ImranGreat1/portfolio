require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

// Connect to the database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log(err));

// Listen to request at port 3030
app.listen(3030, () => console.log('Listening to server at port 3030'));
