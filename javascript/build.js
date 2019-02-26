const fs = require("fs");
var files = fs.readdirSync("./../lib");
var codes = {};
for (var i = 0; i < files.length; ++i) {
  if (files[i].slice(-3) === ".fm") {
    var name = files[i].slice(0, -3);
    codes[name] = fs.readFileSync("./../lib/" + files[i], "utf8").replace(/`/g, "");
  }
}

fs.writeFileSync("formality-stdlib.js", "module.exports = `" + JSON.stringify(codes, 0, 2) + "`;");
