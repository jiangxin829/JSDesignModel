// const http = require('http');

// const app = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('this is testing!');
// })

// app.listen(8888);

// console.log('Server running at http://127.0.0.1:8888')

const express = require('express')
const { resolve } = require('path')

const app = express()

//设置访问网站API 允许 跨域访问
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Content-Type', '*');
    next();
})

// 测试工厂模式实例
app.use('/', express.static(resolve(__dirname, '../src/factory')));

app.listen(8888)

