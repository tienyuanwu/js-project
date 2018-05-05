// 引入模塊
var express = require('express');
var cors = require('cors');
var path = require('path');
var ejs = require('ejs');
var bodyParser = require('body-parser')

var app = express();
app.use(cors());
// 對所有(/)URL或路由返回index.html 
app.get('/', function (req, res) {
	res.render('index');
});

app.use(express.static('client/view/'))

// 設置views路徑和模板
app.set('views', './client/view');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);



// 啟動一個服務，監聽從8888端口進入的所有連接請求
var server = app.listen(8888, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Listening at http://%s:%s', host, port);
}); 
