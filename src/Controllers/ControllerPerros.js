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
    const { id, nombre, raza, descripcion, detalles } = req.body;
    const newPerro = await Perros.create({
      id,
      nombre,
      raza,
      descripcion,
      detalles
    });
    res.status(200).json(newPerro);
  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }
}

const putPerros = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    const { raza } = req.body;
    const { descripcion } = req.body;
    const { detalles } = req.body;

    const oldPerro = await Perros.findByPk(id);
    oldPerro.nombre = nombre;
    oldPerro.raza = raza;
    oldPerro.descripcion = descripcion;
    oldPerro.detalles = detalles;
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
