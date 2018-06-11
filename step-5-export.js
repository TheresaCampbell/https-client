var https = require("https");

module.exports = function getHTML (options, callback) {
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

