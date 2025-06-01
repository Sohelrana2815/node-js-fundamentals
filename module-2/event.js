const EventEmitter = require("node:events");

class SchoolBell extends EventEmitter {}
const schoolBell = new SchoolBell();

schoolBell.on("ring", () => {
  console.log("Yahoo!! class shesh!");
});
schoolBell.on("ring", () => {
  console.log("Deth arekta class ase!");
});

schoolBell.on("broken", () => {
  console.log("Oh no! Class ki ar shesh hobena!");
});

schoolBell.emit("ring");
schoolBell.emit("broken");
