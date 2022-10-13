import  {Router} from 'express';
import { deleteAdoptante, getAdoptante, postAdoptante, putAdoptante } from '../Controllers/ControllerAdoptante.js';
import { getGatos, postGatos, putGatos, deleteGatos } from '../Controllers/ControllerGatos.js';
import { getPerros, postPerros, putPerros, deletePerros } from '../Controllers/ControllerPerros.js';
import { postusuario, login } from '../Controllers/ControllerUsuario.js';

const router=Router();

router.get('/',(req,res)=>{
  res.send("Hola estamos en Index");
});

router.post('/usuario',postusuario);
router.post('/login',login);

router.get('/gatos',getGatos);

router.post('/gatos',postGatos);

router.put('/gatos/:id',putGatos);

router.delete('/gatos/:id',deleteGatos);


router.get('/perros',getPerros);

router.post('/perros',postPerros);

router.put('/perros/:id',putPerros);

router.delete('/perros/:id',deletePerros);


router.get('/adoptante',getAdoptante);

router.post('/adoptante',postAdoptante);

router.put('/adoptante/:id',putAdoptante);

router.delete('/adoptante/:id',deleteAdoptante);

export default router;
