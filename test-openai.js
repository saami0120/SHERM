const { Configuration, OpenAIApi } = require('openai');
const openai = require('openai');
console.log('OpenAI Package:', openai);
console.log('Testing OpenAI Imports:');
console.log('Configuration:', typeof Configuration); // Expected: 'function'
console.log('OpenAIApi:', typeof OpenAIApi);         // Expected: 'function'
