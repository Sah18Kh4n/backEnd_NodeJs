// const http = require('http');
// const users = require('./users');

// http.createServer((req,res) => {
//   res.writeHead(200, {'content-type': 'application/json'});
//   res.write(JSON.stringify(users));
//   res.end();
// }).listen(3000);
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath, 'This is a text file');
// fs.readFile(filePath, 'utf8',(err, data) => {
//   console.log(data);
// })
// fs.appendFile(filePath, ' and file name is apple.txt', (err) => {
//   if(!err){
//     console.log('file is updated');
//   }
// })
// fs.rename(filePath, `${dirPath}/apple.txt`, (err) => {
//   if(!err){
//     console.log('file name is updated');
//   }
// })
// fs.unlinkSync(`${dirPath}/fruit.txt`);