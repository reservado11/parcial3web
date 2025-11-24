"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProducto = exports.putProducto = exports.postProducto = exports.getProductoById = exports.getProductos = void 0;

const service = require("../services/productos.service");

/**
 * Obtener todos los productos
 */
const getProductos = (req, res) => {
    res.json(service.obtenerProductos());
};
exports.getProductos = getProductos;

/**
 * Obtener un producto por ID
 */
const getProductoById = (req, res) => {
    const producto = service.obtenerProductoPorId(Number(req.params.id));
    if (!producto)
        return res.status(404).json({ message: "Producto no encontrado" });
    res.json(producto);
};
exports.getProductoById = getProductoById;

/**
 * Crear un nuevo producto
 */
const postProducto = (req, res) => {
    const nuevo = service.crearProducto(req.body);
    res.status(201).json(nuevo);
};
exports.postProducto = postProducto;

/**
 * Actualizar un producto existente
 */
const putProducto = (req, res) => {
    const actualizado = service.actualizarProducto(Number(req.params.id), req.body);
    if (!actualizado)
        return res.status(404).json({ message: "Producto no encontrado" });
    res.json(actualizado);
};
exports.putProducto = putProducto;

/**
 * Eliminar un producto
 */
const deleteProducto = (req, res) => {
    const ok = service.eliminarProducto(Number(req.params.id));
    if (!ok)
        return res.status(404).json({ message: "Producto no encontrado" });
    res.status(204).send();
};
exports.deleteProducto = deleteProducto;
