const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'styles'), (err, files) => {
  
  fs.writeFile(path.join(__dirname, 'project-dist', 'bundle.css'), '', (err) => {
    if(err) throw err
  })
  if (err)
  console.log(err);
  else {
    console.log("\nCurrent style files to merge:");
    files.forEach(file => {
      if(file.split('.')[1] == 'css'){
        console.log(file)
        fs.readFile(path.join(__dirname, 'styles', file), (err, data) => {
          if (err) throw err;
          fs.appendFile(path.join(__dirname, 'project-dist', 'bundle.css'), data, (err) => {
            if (err) {
              return reject(err);
            };
          });
        });
      };
    })
  };
});