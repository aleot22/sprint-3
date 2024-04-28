const net = require('net');

const port = process.argv[2];

function zeroFill(num) {
    return (num < 10 ? '0' : '') + num;
}

function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = zeroFill(now.getMonth() + 1);
    const day = zeroFill(now.getDate());
    const hours = zeroFill(now.getHours());
    const minutes = zeroFill(now.getMinutes());
    return `${year}-${month}-${day} ${hours}:${minutes}\n`;
}

const server = net.createServer((socket) => {
    const currentDateTime = getCurrentDateTime();
    socket.end(currentDateTime);
});

server.listen(port);