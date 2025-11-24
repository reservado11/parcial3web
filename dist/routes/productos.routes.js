"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("../data/data");

const router = (0, express_1.Router)();

// GET todos los productos
router.get("/", (req, res) => {
    res.json(data_1.productos);
});

// GET producto por id
router.get("/:id", (req, res) => {
    const producto = data_1.productos.find(p => p.id === Number(req.params.id));
    if (!producto)
        return res.status(404).json({ error: "Producto no encontrado" });
    res.json(producto);
});

// POST crear producto
router.post("/", (req, res) => {
    const { nombre, precio, descripcion } = req.body;
    const nuevo = {
        id: data_1.productos.length + 1,
        nombre,
        precio,
        descripcion
    };
    data_1.productos.push(nuevo);
    res.status(201).json(nuevo);
});

// PUT actualizar producto
router.put("/:id", (req, res) => {
    const producto = data_1.productos.find(p => p.id === Number(req.params.id));
    if (!producto)
        return res.status(404).json({ error: "Producto no encontrado" });
    producto.nombre = req.body.nombre ?? producto.nombre;
    producto.precio = req.body.precio ?? producto.precio;
    producto.descripcion = req.body.descripcion ?? producto.descripcion;
    res.json(producto);
});

// DELETE eliminar producto
router.delete("/:id", (req, res) => {
    const index = data_1.productos.findIndex(p => p.id === Number(req.params.id));
    if (index === -1)
        return res.status(404).json({ error: "Producto no encontrado" });
    data_1.productos.splice(index, 1);
    res.json({ mensaje: "Producto eliminado" });
});

exports.default = router;
