const EventEmitter = require("events");
const customEmitter = new EventEmitter();

// on method listen for an event
customEmitter.on("response", () => {
  console.log(`Date received`);
});
// emit method release an event
customEmitter.emit("response");
