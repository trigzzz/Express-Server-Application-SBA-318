import express from 'express';
import data from '../data/index.mjs'; 

const router = express.Router();

router.get('/models', (req, res) => {
  res.json(data.models);
});

router.get('/colorways', (req, res) => {
    const { modelName } = req.query;
  
    let filteredColorways = data.colorways;
  
    if (modelName) {
      filteredColorways = data.colorways.filter(cw => cw.modelName === modelName);
    }
  
    res.json(filteredColorways);
  });

router.get('/users', (req, res) => {
  res.json(data.users);
});


// POST route for adding a new colorway
router.post('/colorways', express.json(), (req, res) => {
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
  
  // PUT route for updating a colorway
router.put('/colorways/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
  
    const colorwayToUpdate = data.colorways.find(cw => cw.id === parseInt(id));
  
    if (!colorwayToUpdate) {
      return res.status(404).json({ error: 'Colorway not found' });
    }
  
    colorwayToUpdate.name = name || colorwayToUpdate.name;
  
    res.json(colorwayToUpdate);
  });

  // DELETE route for deleting a colorway
router.delete('/colorways/:id', (req, res) => {
    const { id } = req.params;
  
    const indexToRemove = data.colorways.findIndex(cw => cw.id === parseInt(id));
  
    if (indexToRemove === -1) {
      return res.status(404).json({ error: 'Colorway not found' });
    }
  
    const removedColorway = data.colorways.splice(indexToRemove, 1)[0];
  
    res.json(removedColorway);
  });



  export default router;
