import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';

const paginaInicio = (req, res) => {
  res.render('inicio', {
    pagina: 'Inicio',
  });
};

const paginaNosotros = (req, res) => {
  res.render('nosotros', {
    pagina: 'Nosotros',
  });
};

const paginaViajes = async (req, res) => {
  //Consultar la base de datos
  const viajes = await Viaje.findAll();

  res.render('viajes', {
    pagina: 'Próximos Viajes',
    viajes
  });
};

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) =>{
    const { slug } = req.params

    try {
        const resultado = await Viaje.findOne({ where: { slug }})

        res.render('viaje',{
            pagina: 'Informacion Viaje',
            resultado
        })
    } catch (error) {
        console.log(error)
    }
}

const paginaTestimoniales = async (req, res) => {
  try {
    //Consultar los testimoniales
    const testimoniales = await Testimonial.findAll();

    res.render('testimoniales', {
      pagina: 'Testimoniales',
      testimoniales
    });
    
  } catch (error) {
    console.error(error)
  }
};



export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetalleViaje,
};
