import { Usuario } from '../Models/Usuarios.js';
import  bcrypt  from 'bcryptjs';
//const { bcrypt } = bcrypt;

const getUsuario = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }

}

const postusuario = async (req, res) => {
  try {

    const { id } = req.body;
    const { nombre } = req.body;
    const { correo } = req.body;
    const { contraseña } = req.body;

    const newUsuario = await Usuario.create({
      id,
      nombre,
      correo,
      contraseña: await bcrypt.hash(contraseña, 10)
    });

    res.status(200).json(newUsuario);
  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }
}

const login = async (req, res) => {
  try {

    const { contraseña } = req.body;
    const { correo } = req.body;

    const user = await Usuario.findOne({ where: {correo: correo }});
    const isSame = await bcrypt.compare(contraseña, user.contraseña);
    if(isSame){
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }
}

const putUsuario = async (req, res) => {
  try {

    const { id } = req.params;
    const { nombre } = req.body;
    const { correo } = req.body;
    const { contraseña } = req.body;

    const oldUsuario = await Usuario.findByPk(id);

    oldUsuario.nombre=nombre;
    oldUsuario.correo=correo;
    oldUsuario.contraseña=contraseña;
    const modUsuario = await oldUsuario.save();

    res.status(200).json(modUsuario);

  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }
}

const deleteUsuario = async (req, res) => {
  try {

    const { id } = req.params;

    const respueta = await Usuario.destroy({
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
  getUsuario,
  postusuario,
  putUsuario,
  deleteUsuario,
  login
}
