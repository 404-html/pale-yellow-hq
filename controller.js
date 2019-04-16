const { spawn } = require('child_process');
const kuteshi = spawn('node', ['./kuteshi/index.js']);

kuteshi.stdout.on('data', (data) => {console.log(`kuteshi: ${data}`);});kuteshi.stderr.on('data', (data) => {console.log(`kuteshi: ${data}`);});kuteshi.on('close', (code) => {console.log(`kuteshi: exited with code ${code}`)});