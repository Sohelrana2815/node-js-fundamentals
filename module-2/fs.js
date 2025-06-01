//1. synchronous
//1. file read/ I/O intensive task--> single thread --> not go to thread pool-->

// 2. asynchronous
// file read --> single thread --> event loop --> thread pool --> task completion

const fs = require("fs");
console.log("Task 1");

let text = "node.js";
fs.writeFile("./hello.txt", text, { encoding: "utf-8" }, (err) => {
  if (err) {
    console.log("Something went wrong.", err);
    return;
  }
  console.log("written successfully!");
});
fs.readFile("./hello.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("Something went wrong", err);
    return;
  }
  text = data;
  console.log(text, "Inside callback");
});

console.log(text);
console.log("Task 3");

// console.log("Task 1");
// const text = "Learning File System";

// fs.writeFileSync("./hello.txt", text);

// console.log("Task 3");

// const data = fs.readFileSync("./hello.txt", { encoding: "utf-8" });
// console.log("Task 4");
// console.log(data);
