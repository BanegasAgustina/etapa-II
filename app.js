const express = require('express');
const app = express();

5

/* importo las rutas*/
const mainRoutes = require('./src/routes/mainRoutes.js')
const PORT = 3000;
app.use(express.static('public'));

/* uso los archivos de las rutas */
app.use('/', mainRoutes);
app.listen(PORT, () => console.log(`Servidor corriendo en
http://localhost:${PORT}`));

