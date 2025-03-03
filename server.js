import express from 'express'
import mongoDb from './config/db.js';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'
import itemRoutes from './routes/itemRoutes.js'


dotenv.config(); 
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

mongoDb().then(()=> {
    app.use('/auth', authRoutes);
    app.use('/api', itemRoutes);

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})

