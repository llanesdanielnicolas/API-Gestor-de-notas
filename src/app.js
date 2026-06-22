const express = require('express');
const cors = require('cors');

const tareaRoutes = require('./routes/tarea.routes');
const categoriaRoutes = require('./routes/categoria.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/tareas', tareaRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;