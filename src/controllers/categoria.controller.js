const { Categoria } = require('../models');

exports.crear = async (req, res) => {

    const categoria = await Categoria.create({
        nombre: req.body.nombre,
        UsuarioId: req.usuario.id
    });

    res.status(201).json(categoria);
};


exports.obtenerTodas = async (req, res) => {

    const categorias = await Categoria.findAll({
        where: {
            UsuarioId: req.usuario.id
        }
    });

    res.json(categorias);
};

/*
exports.obtenerTareasPorCategoria = async (req, res) => {

    const { id } = req.params;

    const categoria = await Categoria.findByPk(id, {
        include: Tarea
    });

    if (!categoria) {
        return res.status(404).json({
            mensaje: "Categoría no encontrada"
        });
    }

    res.json(categoria);
};
*/

exports.eliminar = async (req, res) => {

    const { id } = req.params;

    const categoria = await Categoria.findByPk(id);

    if (!categoria) {
        return res.status(404).json({
            mensaje: "Categoría no encontrada"
        });
    }

    await categoria.destroy();

    res.json({
        mensaje: "Categoría eliminada"
    });
};

