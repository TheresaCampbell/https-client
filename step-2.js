var https = require("https");

function getAndPrintHTML () {
  var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step2.html"
  };

  var chunks = {};

  https.get(requestOptions, function (response) {
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

getAndPrintHTML();