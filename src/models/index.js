const Usuario = require('./user.model');
const Tarea = require('./tarea.model');
const Categoria = require('./categoria.model');

Usuario.hasMany(Tarea);
Tarea.belongsTo(Usuario);

Usuario.hasMany(Categoria);

Categoria.belongsTo(Usuario);

Categoria.hasMany(Tarea, {
    onDelete: 'SET NULL',
    foreignKey: 'CategoriaId'
});

Tarea.belongsTo(Categoria, {
    foreignKey: 'CategoriaId',
    as: 'categoria'
});

module.exports = {
    Usuario,
    Tarea,
    Categoria
};