const readline = require('readline');
const os = require('os')
const path = require('path')
const fs = require('fs')
const process = require('process');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });
let username = os.userInfo().username;
const exitFromConsole = () => {
  console.log("Thank you!");
}
const ask = function(){
  rl.question(`${username}, please enter text to save: `, (answer) => {
    if(answer == 'exit'){
      exitFromConsole();
      rl.close();
      } else {
      fs.appendFile(path.join(__dirname, "text.txt"), `${answer}\n`, function(error){
        if(error) throw error;
        
      });
      ask();
    };
  });
};



rl.on('SIGINT', function () {
  console.log('Ctrl+C was keyed in, make you webhook call here');
 
  rl.close();
});

ask();
/* console.log(process)
let letter = [];
let word = [];
process.stdin.resume();
process.stdin.on("data", data => {
  letter.push(data)
})

process.stdin.on('SIGINT', function () {
  console.log('Ctrl+C was keyed in, make you webhook call here');
 
  process.exit(1);
});
rl.on('line', () => {
  letter = letter.join('');
  if(letter == ''){
    letter = [];
    rl.pause();
  } else {
    word.push(letter)

    letter = []
    fs.appendFile(path.join(__dirname, "text.txt"), word.join(' '), function(error){
      if(error) throw error;
    });
  }
  letter = []
}); */