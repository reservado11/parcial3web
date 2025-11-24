"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarProducto = exports.actualizarProducto = exports.crearProducto = exports.obtenerProductoPorId = exports.obtenerProductos = void 0;

// Lista inicial de productos de maquillaje
let productos = [
    { id: 1, nombre: "Base Mate", precio: 65000, descripcion: "Base líquida de acabado mate" },
    { id: 2, nombre: "Labial Rojo", precio: 38000, descripcion: "Labial de larga duración color rojo intenso" }
];

// Obtener todos los productos
const obtenerProductos = () => productos;
exports.obtenerProductos = obtenerProductos;

// Obtener un producto por ID
const obtenerProductoPorId = (id) => productos.find(p => p.id === id);
exports.obtenerProductoPorId = obtenerProductoPorId;

// Crear un nuevo producto
const crearProducto = (data) => {
    const nuevo = { id: productos.length + 1, ...data };
    productos.push(nuevo);
    return nuevo;
};
exports.crearProducto = crearProducto;

// Actualizar un producto existente
const actualizarProducto = (id, data) => {
    const index = productos.findIndex(p => p.id === id);
    if (index === -1)
        return null;
    productos[index] = { ...productos[index], ...data };
    return productos[index];
};
exports.actualizarProducto = actualizarProducto;

// Eliminar un producto
const eliminarProducto = (id) => {
    const index = productos.findIndex(p => p.id === id);
    if (index === -1)
        return false;
    productos.splice(index, 1);
    return true;
};
exports.eliminarProducto = eliminarProducto;
