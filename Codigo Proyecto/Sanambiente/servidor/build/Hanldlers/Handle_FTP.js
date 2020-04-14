"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client = require('ftp');
exports.CONFIG_FTP = (host, port, user, password) => {
    return {
        host,
        port,
        user,
        password,
    };
};
/**
 *
 * @param csv
 */
exports.csvJSON = (csv) => {
    let lines = csv.split("\n");
    let headers = lines[0].split(",");
    let arrayValue = [];
    arrayValue.push(headers);
    for (var i = 1; i < lines.length; i++) {
        let currentline = lines[i].split(",");
        if (lines[i] !== '') {
            arrayValue.push(currentline);
        }
    }
    return arrayValue;
};
