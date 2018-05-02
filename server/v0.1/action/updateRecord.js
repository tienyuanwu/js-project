var record = require('../api/record');

exports.execute = function (req, res) {
	 record.updateRecord(req, res);
};
