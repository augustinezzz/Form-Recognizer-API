var helper = require('../azure_functions/azure_api.js');

module.exports = function (app) {
	app.post('/analyzelayout', async (req, res) => {
		let type = req.headers['content-type'];
		if (type === 'application/json') {
			var body = JSON.parse(req.body.toString());
			let url = body['input-url'];
			if (url === '') {
				res.status(400).send({ error: 'URL is empty' });
				return;
			}
			const result = await helper.analyze(url, type, 'layout');
			if (result.status === 202) {
				let operationId = result.headers['operation-location'];
				let temp = operationId.split('analyzeResults/');
				res.json({ 'operation-id': temp[1] });
			} else {
				res.status(result.response.status).send(result.response.data);
			}
		} else {
			let file = req.body;
			//let type = req.headers['content-type'];
			if (!file) {
				res.status(400).send({ error: 'URL is empty' });
				return;
			}
			const result = await helper.analyzeFileInput(file, type, 'layout');
			if (result.status === 202) {
				let operationId = result.headers['operation-location'];
				let temp = operationId.split('analyzeResults/');
				res.json({ 'operation-id': temp[1] });
			} else {
				res.status(result.response.status).send(result.response.data);
			}
		}
	});

	app.get('/getlayoutdetails', async (req, res) => {
		let operationId = req.body['operation-id'];
		if (operationId === '') {
			res.status(400).send({ error: 'Operation ID is empty' });
			return;
		}
		const result = await helper.getDetails(operationId, 'layout');
		if (result.status === 200) {
			res.json(result.data);
		} else {
			res.status(result.response.status).send(result.response.data);
		}
	});
};
