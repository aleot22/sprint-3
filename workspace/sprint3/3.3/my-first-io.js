const fs = require('fs');

const filePath = process.argv[2];

const buffer = fs.readFileSync(filePath);

const content = buffer.toString();

const newlineCount = content.split('\n').length - 1;

console.log(newlineCount);