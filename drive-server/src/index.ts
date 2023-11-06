import dbConfig from './config/db.config';


import express from 'express';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';


import authRoutes from './routes/authRoutes';
import homeRoutes from './routes/homeRoutes';


const app = express();


mongoose.connect(dbConfig.uri)
.then(() => console.log('Connected to MongoDB'))
.catch((error: any) => console.error('MongoDB connection error:', error));


app.use(cookieParser());
const PORT = process.env.PORT || 5000;



// Middlewares for parsing request bodies here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the authRoutes with the /auth prefix
app.use('/auth', authRoutes);

app.use('/api/home', homeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
