const http = require('http');

const urls = process.argv.slice(2);

const responseDataArray = [];

function fetchData(url, index) {
    http.get(url, (response) => {
        let responseData = '';

        response.on('data', (data) => {
            responseData += data;
        });

        response.on('end', () => {
            responseDataArray[index] = responseData;

            if (responseDataArray.filter(Boolean).length === urls.length) {
                responseDataArray.forEach((data) => {
                    console.log(data);
                });
            }
        });

    }).on('error', (error) => {
        console.error('Error al realizar la solicitud:', error);
    });
}
urls.forEach((url, index) => {
    fetchData(url, index);
});