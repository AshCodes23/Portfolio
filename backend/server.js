import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

app.get('/api/health', (req, res) => res.status(200).json({ status: 'ok' }));

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';

// Connect to MongoDB without deprecation warnings (Mongoose 8+)
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Only listen if not running on Vercel Serverless
    if (process.env.NODE_ENV !== 'production') {
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    }
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    // Fallback to start server without DB for frontend development setup...
    if (process.env.NODE_ENV !== 'production') {
      console.log('Starting server without DB...');
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT} (No DB)`);
      });
    }
  });

export default app;
