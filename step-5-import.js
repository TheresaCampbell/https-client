var getHTML = require("./step-5-export");

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step5.html"
  };

getHTML(requestOptions, printHTML);