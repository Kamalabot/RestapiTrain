import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

app.listen(3000, ()=>{
    console.log(`Server Started at ${3000}`);
})

import dotenv from 'dotenv'

dotenv.config();

const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) =>{
    console.log(error);
})

database.once('connected', () => {
    console.log('Database Connected');
})

import routes from './routes/routes.js';

app.use('/api',routes);