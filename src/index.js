import * as monaco from "monaco-editor";

// Your code here

var editor = monaco.editor.create(document.getElementById("editor"), {
  value: 'console.log("hello");',
  language: "javascript",
  automaticLayout: true,
});
