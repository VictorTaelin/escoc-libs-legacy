const fs = require("fs");
var files = fs.readdirSync("./../lib");
var code = "";
for (var i = 0; i < files.length; ++i) {
  if (files[i].slice(-3) === ".fm") {
    code += fs.readFileSync("./../lib/" + files[i], "utf8").replace(/`/g, "") + "\n";
  }
}

fs.writeFileSync("formality-stdlib.js", "module.exports = `" + code + "`;");
