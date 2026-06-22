const { Model } = require('sequelize');
const { Tarea, Categoria } = require('../models');

exports.obtenerTodas = async (req, res) => {

    const tareas = await Tarea.findAll({
        where: {
            UsuarioId: req.usuario.id
        },
        include: [
            {
                model: Categoria,
                as: 'categoria'
            }
        ]
    });

    res.json(tareas);
};

exports.crear = async (req, res) => {

    const { titulo, descripcion, categoriaId } = req.body;

    let categoria = null;
    
    if (categoriaId) {
        categoria = await Categoria.findOne({
            where: {
                id: categoriaId,
                UsuarioId: req.usuario.id
            }
        });

        if (!categoria) {
            return res.status(400).json({ error: 'Categoría no encontrada' });
        }
    }    

    const tarea = await Tarea.create({
        titulo,
        descripcion,
        CategoriaId: categoria ? categoria.id : null,
        UsuarioId: req.usuario.id
    });

    res.status(201).json(tarea);
};

exports.obtenerTareasPorCategoria = async (req, res) => {

    const categoria = await Categoria.findOne({
        where: {
            id: req.params.id,
            UsuarioId: req.usuario.id
        },
        include: [
            {
                model: Tarea,
                as: 'tareas'
            }
        ]
    });

    if (!categoria) {
        return res.status(404).json({ error: 'Categoría no encontrada' });
    }

    res.json(categoria);
};

