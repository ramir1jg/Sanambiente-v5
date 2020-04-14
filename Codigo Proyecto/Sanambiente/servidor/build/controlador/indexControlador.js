"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexControlador {
    index(req, res) {
        res.json({ text: 'Estas en /api/home' });
    }
}
exports.indexControlador = new IndexControlador();
