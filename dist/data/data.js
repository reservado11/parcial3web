"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordenes = exports.productos = exports.clientes = void 0;

// Lista de clientes
exports.clientes = [
    { id: 1, nombre: "Camila", correo: "camila@example.com" },
    { id: 2, nombre: "Perla", correo: "perla@example.com" }
];

// Lista de productos de maquillaje
exports.productos = [
    { id: 1, nombre: "Base Mate", precio: 65000, descripcion: "Base líquida de acabado mate" },
    { id: 2, nombre: "Labial Rojo", precio: 38000, descripcion: "Labial de larga duración color rojo intenso" }
];

// Lista de órdenes (pedidos)
exports.ordenes = [
    { id: 1, clienteId: 1, productoId: 1, cantidad: 2, total: 130000 },
    { id: 2, clienteId: 2, productoId: 2, cantidad: 1, total: 38000 }
];



