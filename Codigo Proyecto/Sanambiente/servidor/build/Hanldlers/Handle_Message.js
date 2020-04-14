"use strict";
// Esta clase contiene la funcion con la estructura de los mensajes mostrados por consola
Object.defineProperty(exports, "__esModule", { value: true });
function handleMessage(response, code, message) {
    return response.status(code).json({ message });
}
exports.default = handleMessage;
