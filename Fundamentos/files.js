// Requerir el File System
const fs = require('fs');

// Leer un archivo
const data = fs.readFileSync('readme.md', 'utf8');

// Modificar un archivo
const newData = data.replace(/Javascript/ig, 'Node.js');

// Crear un archivo | Puede ser uno nuevo u otro existente
fs.writeFileSync('readme.md', newData);

console.log(data);