var record = require('../api/record');

exports.execute = function (req, res) {
	 record.getRecord(function (data) {
	 	res.send(data);
	 });
};
