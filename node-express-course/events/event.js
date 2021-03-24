const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  console.log(`Date received`);
});
customEmitter.emit("response");
