import express from 'express';
import data from '../data';

const router = express.Router();

router.get('/models', (req, res) => {
  res.json(data.models);
});

router.get('/colorways', (req, res) => {
  res.json(data.colorways);
});

router.get('/users', (req, res) => {
  res.json(data.users);
});


// POST route for adding a new colorway
router.post('/colorways', (req, res) => {
    const { modelName, name } = req.body;
  
    if (!modelName || !name) {
      return res.status(400).json({ error: 'modelName and name are required' });
    }
  
    const newColorway = {
      id: data.colorways.length + 1,
      modelName,
      name,
    };
  
    data.colorways.push(newColorway);
    res.status(201).json(newColorway);
  });
  
  export default router;
