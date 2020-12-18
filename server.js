const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

//Raw body parser for binary files
app.use((req, res, next) => {
	if (
		req.originalUrl === '/analyzereceipt' ||
		req.originalUrl == '/analyzelayout'
	) {
		bodyParser.raw({
			type: '*/*',
			limit: '50mb',
		})(req, res, next);
	} else {
		express.json()(req, res, next);
	}
});

//-------------API Routes----------------------

require('./routes/receipt.routes')(app);
require('./routes/layout.routes')(app);

//---------- Open Port to Listen-----------------------
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
