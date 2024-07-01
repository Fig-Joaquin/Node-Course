const fs = require('fs');

// Lee el archivo
const content = fs.readFileSync('readme.md', 'utf8');

// Cuenta las palabras
const wordCount = content.split(' ');

/* //! Método 1 
const jsWord = content.split('on').length - 1;
*/

/* //! Método 2
const words = wordCount.filter(
    (word) => word.toLowerCase().includes('react')).length;
*/

/* //! Método 3
const wordCounting = content.match(/react/gi ?? []).length;
 */
console.log(words);