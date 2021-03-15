// CommonJS, every files is module (by default)
// Modules - Encapsulated Code (only share minimum)
const { smith, steve, tom } = require("./name");
const sayHi = require("./function");

sayHi(smith);
sayHi(steve);
sayHi(tom);
