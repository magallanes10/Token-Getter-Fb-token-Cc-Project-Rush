const readline = require('readline');
const fb = require("fbkey");
const gradient = require('gradient-string');
//tangina buhay na yan hhaha
const title = gradient('lightblue', 'cyan').multiline([
  'Token Getter',
  'By Jonell Magallanes'
].join('\n'));

console.log(title);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function loginAndGetToken() {
  rl.question('Enter your email: ', (email) => {
    rl.question('Enter your password: ', async (password) => {
      console.log(gradient('lightblue', 'cyan')('Logining...'));
      try {
        const token = await fb.getKey(email, password);
        console.log(gradient('lightblue', 'cyan')('Login successful. Token: ' + token));
      } catch (error) {
        console.error('Error getting token:', error);
      } finally {
        rl.close();
      }
    });
  });
}

loginAndGetToken();
