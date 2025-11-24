"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
const path_1 = __importDefault(require("path"));

// Importar rutas adaptadas
const productos_routes_1 = __importDefault(require("./routes/productos.routes"));
const clientes_routes_1 = __importDefault(require("./routes/clientes.routes"));
const ordenes_routes_1 = __importDefault(require("./routes/ordenes.routes"));

const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());

// Swagger
const swaggerDocument = yamljs_1.default.load(
    path_1.default.join(__dirname, "swagger", "swagger.yaml")
);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));

// Rutas principales
app.use("/api/productos", productos_routes_1.default);
app.use("/api/clientes", clientes_routes_1.default);
app.use("/api/ordenes", ordenes_routes_1.default);

exports.default = app;
