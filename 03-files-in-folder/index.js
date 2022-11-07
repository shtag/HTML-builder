const fs = require('fs');
const path = require('path');

let filesList = [];

function read() {
  fs.readdir(path.join(__dirname, 'secret-folder'), {withFileTypes: true}, (err, files) => {
    if (err)
      console.log(err);
    else {
      files.forEach((file, id) => {
        fs.stat(path.join(__dirname, 'secret-folder', file.name), (error, stats) => {
          if (error) {
            console.log(error);
          }
          else {
            const sizeFile = (stats.size/1024).toFixed(2) + 'Kb';
            if (!file.isDirectory()) {
              filesList.push(file.name.split('.').join(' - ') + ' - ' +  sizeFile);
            }
            if (files.length - 1 == id) {
              filesList.forEach(Element => {
                console.log(Element);
              });
            };
          };
        });
      });
    };
  });
};

read();
