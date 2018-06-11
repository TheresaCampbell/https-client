var https = require("https");

function getAndPrintHTML (options) {

  var chunks = {};

  https.get(options, function (response) {
    response.setEncoding("utf8");
    response.on("data", function(data) {
      console.log("Chunk received. Chunk length: " + data.length + "\n");
      chunks += (data);
    })
    response.on("end", function(data) {
      console.log(chunks);
    });
  })
}

var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step3.html"
  };

getAndPrintHTML(requestOptions);