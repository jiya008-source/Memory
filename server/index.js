
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
import dotenv from 'dotenv';
dotenv.config();
app.use('/posts', postRoutes);

const CONNECTION_URL = process.env.CONNECTION_URI;
const PORT = process.env.PORT|| 5002;
mongoose.set('strictQuery', true); // or false if you prefer

mongoose.connect(CONNECTION_URL, { 
  // useNewUrlParser: true, useUnifiedTopology: true 

  })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);