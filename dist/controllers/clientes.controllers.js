"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteModel = void 0;

/**
 * Modelo para representar un cliente en la tienda de maquillaje
 */
class ClienteModel {
    constructor(id, nombre, email, rol = 'cliente') {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.rol = rol; // por defecto "cliente", también puede ser "admin"
    }
}

exports.ClienteModel = ClienteModel;
