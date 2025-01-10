"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
let outputMessage = '';
const base = 5;
const headerMessage = `
===================================
        Tabla del ${base}
===================================
`;
for (let i = 1; i <= 10; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}
outputMessage = headerMessage + outputMessage;
console.log(outputMessage);
const outPutPath = `outputs`;
(0, fs_1.mkdirSync)(outPutPath, { recursive: true });
(0, fs_1.writeFileSync)('outputs/tabla-5.txt', outputMessage);
