//fs-文件系统
//const fs =require('fs')

//同步调用
// const data = fs.readFileSync('./download.js');
// console.log(data.toString());

//异步调用
// fs.readFile('./download.js',(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString());
// })
// console.log('其他操作')

// 常常搭配patch api使用
// const patch = require('path');
// fs.readFile(patch.resolve(patch.resolve(__dirname),'./download.js'),(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString());
// })

//promisify
// const {promisify} = require('util');
// const readFile = promisify(fs.readFile);
// readFile('./download.js').then(data=>console.log(data.toString()));

//fs promises API node v10
// const fsp= require('fs').promises;
// fsp.readFile('./download.js')
// .then(data=>console.log(data.toString()))
// .catch(err=>console.log(err));

//async-await
(async()=>{
    const fs =require('fs');
    const {promisify} = require('util');
    const readFile =promisify(fs.readFile);
    const data =await readFile('./index.html');
    console.log('data',data.toString())
})()
