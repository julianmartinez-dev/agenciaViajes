import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
  //req -> lo que enviamos | res -> lo que express nos responde
  res.send('Inicio');
});
router.get('/nosotros', (req, res) => {

  const viajes = 'Viaje a Bariloche'

  res.render('nosotros', {
    textoViajes : viajes
  })
});
router.get('/contacto', (req, res) => {
  res.send('Contacto');
});
router.get('/testimoniales', (req, res) => {
  res.send('Testimoniales');
});

export default router;