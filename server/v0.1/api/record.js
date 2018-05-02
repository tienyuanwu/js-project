var MessageList = [

{ "Message":"Hello React"},

{ "Message":"Hello Webpack"},

{ "Message":"Hello Nodejs"},

{ "Message":"Hello Express"}

];

exports.getRecord = function (callback) {
	callback(MessageList);
};

exports.updateRecord = function (req,res) {
	res.send("finish");
	console.log(req.body);
	var json = req.body;

	console.log(json['id']);
	for (data in json['data']) {
		console.log(data);
	}
};
