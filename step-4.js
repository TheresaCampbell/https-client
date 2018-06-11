var https = require("https");

function getAndPrintHTML (options, callback) {

  var chunks = {};

  https.get(options, function (response) {
    response.setEncoding("utf8");
    response.on("data", function(data) {
      console.log("Chunk received. Chunk length: " + data.length + "\n");
      chunks += (data);
    })
    response.on("end", function(data) {
      callback(chunks);
    });
  })
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step4.html"
  };

getAndPrintHTML(requestOptions, printHTML);