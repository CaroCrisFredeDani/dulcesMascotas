import { Perros } from '../Models/Perros.js';

const getPerros = async (req, res) => {
  try {
    const perros = await Perros.findAll();
    res.status(200).json(perros);
  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }
}

const postPerros = async (req, res) => {
  try {
    const { id, foto, nombre, edad, talla, descripcion } = req.body;
    const newPerro = await Perros.create({
      id,
      foto,
      nombre,
      edad,
      talla,
      descripcion
    });
    res.status(200).json(newPerro);
  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }
}

const putPerros = async (req, res) => {
  try {
    const { id } = req.params;
    const { foto } = req.body
    const { nombre } = req.body;
    const { edad } = req.body;
    const { talla } = req.body;
    const { descripcion } = req.body;

    const oldPerro = await Perros.findByPk(id);
    oldPerro.foto = foto;
    oldPerro.nombre = nombre;
    oldPerro.edad = edad;
    oldPerro.talla = talla;
    oldPerro.descripcion = descripcion;
    const modPerro = await oldPerro.save();

    res.status(200).json(modPerro);

  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }
}

const deletePerros = async (req, res) => {
  try {

    const { id } = req.params;

    const respueta = await Perros.destroy({
       where:{
        id
       }
    });

    res.status(200).json({
      body: {
        id
      }
    });

  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }

}


export {
  getPerros,
  postPerros,
  putPerros,
  deletePerros
}
