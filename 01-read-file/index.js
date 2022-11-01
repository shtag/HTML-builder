const path = require('path');
const fs = require('fs');

let text ='';
const readableStream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
readableStream.on('data', chunk => text += chunk);
readableStream.on('end', () => console.log(text));
readableStream.on('error', error => console.log('Error', error.message));

