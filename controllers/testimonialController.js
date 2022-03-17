import { Testimonial } from "../models/Testimoniales.js";


export const guardarTestimonial = async (req, res) =>{
    //Validar
    const { nombre, correo, mensaje} = req.body

    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje: 'El nombre esta vacio'})
    }
    if (correo.trim() === '') {
      errores.push({ mensaje: 'El correo esta vacio' });
    }
    if (mensaje.trim() === '') {
      errores.push({ mensaje: 'El mensaje esta vacio' });
    }

    if(errores.length){

        //Consultar Testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        //Mostrar la vista con errores
        res.render('testimoniales',{
            pagina: "Testimoniales",
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }else{
        //Almacenarlo en la base de datos

        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })

            res.redirect('/testimoniales')
        } catch (error) {
            console.error(error)
        }
        
    }
}