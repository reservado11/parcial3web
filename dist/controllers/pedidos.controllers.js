"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdenModel = void 0;

/**
 * Clase para crear una nueva orden en la tienda de maquillaje
 */
class OrdenModel {
    constructor(id, clienteId, items) {
        this.id = id;
        this.clienteId = clienteId;
        this.items = items; // [{ productoId, cantidad, precioUnitario }]
        this.fecha = new Date();
        this.estado = 'pendiente';
        // Calcula el total de la orden
        this.total = items.reduce(
            (sum, item) => sum + (item.cantidad * item.precioUnitario),
            0
        );
    }
}

