const { execSync } = require("child_process");

console.log(`## STARTING ZALENIUM`);

execSync(`curl -sSL https://raw.githubusercontent.com/dosel/t/i/p | bash -s start`)

console.log(`## ZALENIUM FINISHED`);
