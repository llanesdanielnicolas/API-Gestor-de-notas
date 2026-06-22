const { Usuario } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {

    try {

        const {
            nombre,
            email,
            password
        } = req.body;

        const passwordHash =
            await bcrypt.hash(
                password,
                10
            );

        const usuario =
            await Usuario.create({

                nombre,
                email,

                password:
                    passwordHash
            });

        const token = jwt.sign(
            {
                id: usuario.id,
                email: usuario.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h'
            }
        );

        res.status(201).json({

            mensaje:
                'Usuario creado',

            token,

            usuario: {
                id: usuario.id,
                nombre: usuario.nombre,
                email: usuario.email
            }
        });

    } catch(error) {

        res.status(500).json(error);
    }
};


exports.login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const usuario = await Usuario.findOne({
            where: { email }
        });

        if (!usuario) {

            return res.status(401).json({
                mensaje: 'Credenciales inválidas'
            });
        }

        const passwordValida =
            await bcrypt.compare(
                password,
                usuario.password
            );

        if (!passwordValida) {

            return res.status(401).json({
                mensaje: 'Credenciales inválidas'
            });
        }

        const token = jwt.sign(
            {
                id: usuario.id,
                email: usuario.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h'
            }
        );

        res.json({
            token
        });

    } catch(error) {

        res.status(500).json(error);
    }
};


