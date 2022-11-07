const fs = require('fs');
const path = require('path');


function createDir(){
      try {
        fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
          if(err){
            console.log(err)
          }
        });
      }
      catch (err) {
        console.error(err);
      }
  };



createDir()

fs.readdir(path.join(__dirname, 'files-copy'), {withFileTypes: true}, (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      fs.unlink(path.join(__dirname, 'files-copy', file.name), (err) => {
        if (err) throw err;
      });
    })
  }
})


fs.readdir(path.join(__dirname, 'files'), {withFileTypes: true}, (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach((file, id) => {
      fs.stat(path.join(__dirname, 'files', file.name), (error, stats) => {
        if (error) {
          console.log(error);
        }
        else {
          fs.copyFile(path.join(__dirname, 'files', file.name), path.join(__dirname, 'files-copy', file.name), (err) => {
            if (err) {
              console.log("Error Found:", err);
            }
            else{
            }
          })
          
          
        };
      });
    });
  };
});
