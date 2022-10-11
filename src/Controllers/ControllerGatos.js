import { Gatos } from '../Models/Gatos.js';

const getGatos = async (req, res) => {
  try {
    const gatos = await Gatos.findAll();
    res.status(200).json(gatos);
  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }
}

const postGatos = async (req, res) => {
  try {
    const { id, nombre, raza, descripcion, detalles } = req.body;
    const newGato = await Gatos.create({
      id,
      nombre,
      raza,
      descripcion,
      detalles
    });
    res.status(200).json(newGato);
  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }
}

const putGatos = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    const { raza } = req.body;
    const { descripcion } = req.body;
    const { detalles } = req.body;

    const oldGatos = await Gatos.findByPk(id);
    oldGatos.nombre = nombre;
    oldGatos.raza = raza;
    oldGatos.descripcion = descripcion;
    oldGatos.detalles = detalles;
    const modGato = await oldGatos.save();

    res.status(200).json(modGato);

  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }
}

const deleteGatos = async (req, res) => {
  try {

    const { id } = req.params;

    const respueta = await Gatos.destroy({
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
  getGatos,
  postGatos,
  putGatos,
  deleteGatos
}
