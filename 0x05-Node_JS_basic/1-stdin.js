// 1-stdin.js

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isPiped = !process.stdin.isTTY;

rl.question('Welcome to Holberton School, what is your name? \n', (name) => {
  console.log(`Your name is: ${name}`);
  if (isPiped) {
    console.log('This important software is now closing\n');
  }
  rl.close();
});
