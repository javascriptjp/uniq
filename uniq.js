const fs = require('fs');
const args = [];
for(const arg of process.argv)if(arg.startsWith('-'))args.push(arg.slice(1));
if(!process.argv[2])throw new Error("You need to specify the file name as an argument.");
if(!fs.existsSync(process.argv[2]))throw new Error("File not found.");
const text = fs.readFileSync(process.argv[2],args.length != 0?args.pop():"utf-8");
const rawtext = text.replace(/\r/g, "").split("\n");
const settext = [...new Set(rawtext)];
fs.writeFileSync(process.argv[2],settext.join("\n"));
