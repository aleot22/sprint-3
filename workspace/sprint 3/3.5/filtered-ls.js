const fs = require('fs');
const path = require('path');

const directory = process.argv[2];
const extension = `.${process.argv[3]}`;

fs.readdir(directory, function(err, files) {
    if (err) {
        return console.error('Error al leer el directorio:', err);
    }

    const filteredFiles = files.filter(file => path.extname(file) === extension);

    filteredFiles.forEach(file => console.log(file));
});