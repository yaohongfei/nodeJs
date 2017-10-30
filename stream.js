// Node.js，Stream 有四种流类型：
// Readable - 可读操作。
// Writable - 可写操作。
// Duplex - 可读可写操作.
// Transform - 操作被写入数据，然后读出结果。
// 所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
// data - 当有数据可读时触发。
// end - 没有更多的数据可读时触发。
// error - 在接收和写入过程中发生错误时触发。
// finish - 所有数据已被写入到底层系统时触发。

var fs  = require('fs');

//输入流
var data = '';

var readerStream = fs.createReadStream("input.txt");

readerStream.setEncoding('UTF8');

readerStream.on('data',function(chunk){
    data += chunk; 
});

readerStream.on('end',function(){
    console.log(data);
});

readerStream.on('error', function(err){
    console.log(err.stack);
});
 
 console.log("数据读取完毕");


 //输出流
var writeStream = fs.createWriteStream("output.txt");

var outData = "Hellow World";

writeStream.write(outData,'UTF8');

writeStream.end();

// 处理流事件 --> data, end, and error   
writeStream.on('finish', function() {
    console.log("写入完成。");
});

writeStream.on('error', function(err){
   console.log(err.stack);
});

console.log("数据写入完毕");


//管道流
// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");


