import * as dotenv from 'dotenv';
dotenv.config();


import express from 'express';
import authRoutes from './routes/authRoutes';
import homeRoutes from './routes/homeRoutes';


const app = express();
const PORT = process.env.PORT || 3000;



// Middlewares for parsing request bodies here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the authRoutes with the /auth prefix
app.use('/auth', authRoutes);

app.use('/', homeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
