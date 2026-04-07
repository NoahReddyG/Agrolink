import express from 'express';
const router = express.Router();

router.post('/predict', (req, res) => {
  res.json({ message: 'Predict price' });
});

export default router;
