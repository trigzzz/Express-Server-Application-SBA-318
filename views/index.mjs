import express from 'express';
import data from '../data/index.mjs';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { models: data.models, colorways: data.colorways });
});

export default router;
