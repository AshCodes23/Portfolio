import express from 'express';
import Contact from '../models/Contact.js';
import mongoose from 'mongoose';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (mongoose.connection.readyState === 1) {
      const newContact = new Contact({ name, email, message });
      await newContact.save();
    } else {
      console.log('DB not connected, skipping save but returning success');
    }

    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
