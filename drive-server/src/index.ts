import * as dotenv from 'dotenv';
dotenv.config();


import express from 'express';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/authRoutes';
import homeRoutes from './routes/homeRoutes';


const app = express();
app.use(cookieParser());
const PORT = process.env.PORT || 5000;



// Middlewares for parsing request bodies here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the authRoutes with the /auth prefix
app.use('/auth', authRoutes);

app.use('/home', homeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
