import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
  res.render('inicio');
});
router.get('/nosotros', (req, res) => {
  res.render('nosotros')
});
router.get('/viajes', (req, res) => {
  res.render('viajes');
});
router.get('/testimoniales', (req, res) => {
  res.render('testimoniales');
});

export default router;