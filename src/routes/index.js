import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.render('index', {
  title: 'Primer Web con Node.js'
})); //No es necesario ponerle extension xq ya sabe que es en .ejs
routes.get('/abouts', (req, res) => res.render('about', {
  title: 'Acerca de'
}));
routes.get('/contact', (req, res) => res.render('contact', {
  title: 'Contacto'
}));

export default routes;