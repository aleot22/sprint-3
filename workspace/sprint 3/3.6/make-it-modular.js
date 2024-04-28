const mymodule = require('./mymodule');

const directory = process.argv[2];
const extension = process.argv[3];

mymodule(directory, extension, function(err, files) {
    if (err) {
        return console.error('Error al leer el directorio:', err);
    }

    files.forEach(file => console.log(file));
});