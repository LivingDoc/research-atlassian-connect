const shell = require('node-powershell');

let ps = new shell({
  executionPolicy: 'Bypass', 
  noProfile: true
});

ps.addCommand('ngrok http 3000');
ps.invoke().then(output => {console.log(output)}).catch(err => {console.log(err)});
ps.dispose().then(code => {console.log("dispose1")}).catch(err => {console.log(err)});


let variable;
let ps2 = new shell({
  executionPolicy: 'Bypass',
  noProfile: true
});

ps2.addCommand('Invoke-RestMethod -Method Get -Uri http://localhost:4040/api/tunnels/command_line');
ps2.invoke().then(output => {console.log(output)}).catch(err => {console.log(err)});
ps2.dispose().then(code => {console.log("dispose 2")}).catch(err => {console.log(err)});

