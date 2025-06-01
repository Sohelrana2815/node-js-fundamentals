const fs = require("fs");

fs.readFile("./hello-world.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("Something went wrong!", err);
    return;
  }
  console.log(data, "Inside the callback");
  fs.writeFile("./hello.txt", data, { encoding: "utf-8" }, (err) => {
    if (err) {
      console.log("Something went wrong white writing file", err);
      return;
    }
    console.log("File written successfully!");
  });
});
