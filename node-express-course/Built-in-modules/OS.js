const os = require("os");
const { uptime } = require("process");

// Info about current user
const user = os.userInfo();
console.log(user);

// checks for the upTime of system

const upTime = os.uptime();

console.log(`The system has been running for ${upTime} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);
