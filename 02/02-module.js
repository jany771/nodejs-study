// const os =require('os');
// const mem = os.freemem()/os.totalmem() *100;
// console.log(`内存占用率：${mem.toFixed(2)}%`);

// const download = require('download-git-repo');
// download('github:su37josephxia/vue-template','test',err =>{
//     console.log(err ? 'Error' : 'Success')
// })

// 完善代码
// const download = require('download-git-repo');
// const ora =require('ora');
// const process =ora('下载......项目');
// process.start()
// download('github:su37josephxia/vue-template','test', err =>{
//     if(err){
//         process.fail()
//     }else{
//         process.succeed()
//     }
// })

// promisefy
//如何让异步任务串行化
const repo = 'github:su37josephxia/vue-template';
const desc = '../test';
const {clone} = require('./download')
clone(repo,desc)

