"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("../data/data");

const router = (0, express_1.Router)();

// GET todos los clientes
router.get("/", (req, res) => {
    res.json(data_1.clientes);
});

// GET cliente por id
router.get("/:id", (req, res) => {
    const cliente = data_1.clientes.find(c => c.id === Number(req.params.id));
    if (!cliente)
        return res.status(404).json({ error: "Cliente no encontrado" });
    res.json(cliente);
});

// POST crear cliente
router.post("/", (req, res) => {
    const { nombre, correo } = req.body;
    const nuevo = {
        id: data_1.clientes.length + 1,
        nombre,
        correo
    };
    data_1.clientes.push(nuevo);
    res.status(201).json(nuevo);
});

// PUT actualizar cliente
router.put("/:id", (req, res) => {
    const cliente = data_1.clientes.find(c => c.id === Number(req.params.id));
    if (!cliente)
        return res.status(404).json({ error: "Cliente no encontrado" });
    cliente.nombre = req.body.nombre ?? cliente.nombre;
    cliente.correo = req.body.correo ?? cliente.correo;
    res.json(cliente);
});

// DELETE eliminar cliente
router.delete("/:id", (req, res) => {
    const index = data_1.clientes.findIndex(c => c.id === Number(req.params.id));
    if (index === -1)
        return res.status(404).json({ error: "Cliente no encontrado" });
    data_1.clientes.splice(index, 1);
    res.json({ mensaje: "Cliente eliminado" });
});

exports.default = router;
