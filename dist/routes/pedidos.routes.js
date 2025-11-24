"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("../data/data");

const router = (0, express_1.Router)();

/* ============================
   GET – Obtener todas las órdenes
   ============================ */
router.get("/", (req, res) => {
    res.json(data_1.ordenes);
});

/* ============================
   GET – Obtener una orden por ID
   ============================ */
router.get("/:id", (req, res) => {
    const orden = data_1.ordenes.find(o => o.id === Number(req.params.id));
    if (!orden)
        return res.status(404).json({ error: "Orden no encontrada" });
    res.json(orden);
});

/* ============================
   POST – Crear una orden
   ============================ */
router.post("/", (req, res) => {
    const { clienteId, productoId, cantidad } = req.body;

    // Validaciones
    if (!clienteId || !productoId || !cantidad)
        return res.status(400).json({ error: "Faltan datos: clienteId, productoId, cantidad" });
    if (cantidad <= 0)
        return res.status(400).json({ error: "La cantidad debe ser mayor a 0" });
    if (!data_1.clientes.some(c => c.id === clienteId))
        return res.status(400).json({ error: "El cliente no existe" });

    const producto = data_1.productos.find(p => p.id === productoId);
    if (!producto)
        return res.status(400).json({ error: "El producto no existe" });

    // Calcular total
    const total = producto.precio * cantidad;
    const nuevo = {
        id: data_1.ordenes.length + 1,
        clienteId,
        productoId,
        cantidad,
        total,
        estado: "pendiente"
    };

    data_1.ordenes.push(nuevo);
    res.status(201).json(nuevo);
});

/* ============================
   PUT – Actualizar una orden
   ============================ */
router.put("/:id", (req, res) => {
    const orden = data_1.ordenes.find(o => o.id === Number(req.params.id));
    if (!orden)
        return res.status(404).json({ error: "Orden no encontrada" });

    const { clienteId, productoId, cantidad } = req.body;

    // Validaciones opcionales si vienen en el body
    if (clienteId && !data_1.clientes.some(c => c.id === clienteId))
        return res.status(400).json({ error: "El cliente no existe" });
    if (productoId && !data_1.productos.some(p => p.id === productoId))
        return res.status(400).json({ error: "El producto no existe" });
    if (cantidad !== undefined && cantidad <= 0)
        return res.status(400).json({ error: "La cantidad debe ser mayor a 0" });

    // Actualizar
    orden.clienteId = clienteId ?? orden.clienteId;
    orden.productoId = productoId ?? orden.productoId;
    orden.cantidad = cantidad ?? orden.cantidad;

    // Recalcular total
    const producto = data_1.productos.find(p => p.id === orden.productoId);
    orden.total = producto ? producto.precio * orden.cantidad : orden.total;

    res.json(orden);
});

/* ============================
   DELETE – Eliminar una orden
   ============================ */
router.delete("/:id", (req, res) => {
    const index = data_1.ordenes.findIndex(o => o.id === Number(req.params.id));
    if (index === -1)
        return res.status(404).json({ error: "Orden no encontrada" });

    data_1.ordenes.splice(index, 1);
    res.json({ mensaje: "Orden eliminada" });
});

exports.default = router;
