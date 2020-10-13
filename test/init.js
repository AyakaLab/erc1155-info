const fs = require("fs")
fs.createReadStream('./config.json.example').pipe(fs.createWriteStream('./config.json'))