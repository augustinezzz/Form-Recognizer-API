const axios = require('axios');

module.exports = {
	analyze: async function (url, type, apiType) {
		const headers = {
			'Content-Type': type,
			'Ocp-Apim-Subscription-Key': '82a5177f5d814d85946fc7b95a87081c',
		};
		let apiUrl = '';
		if (apiType === 'receipt') {
			apiUrl =
				'https://form-reciept-recognizer.cognitiveservices.azure.com/formrecognizer/v2.1-preview.2/prebuilt/receipt/analyze';
		} else if (apiType === 'layout') {
			apiUrl =
				'https://form-reciept-recognizer.cognitiveservices.azure.com/formrecognizer/v2.0/layout/analyze';
		}
		try {
			return await axios.post(
				apiUrl,
				{ source: url },
				{
					headers: headers,
				}
			);
		} catch (err) {
			console.log(err);
			return err;
		}
	},
	analyzeFileInput: async function (f, type, apiType) {
		const headers = {
			'Content-Type': type,
			'Ocp-Apim-Subscription-Key': '82a5177f5d814d85946fc7b95a87081c',
		};
		if (apiType === 'receipt') {
			apiUrl =
				'https://form-reciept-recognizer.cognitiveservices.azure.com/formrecognizer/v2.1-preview.2/prebuilt/receipt/analyze';
		} else if (apiType === 'layout') {
			apiUrl =
				'https://form-reciept-recognizer.cognitiveservices.azure.com/formrecognizer/v2.0/layout/analyze';
		}
		try {
			return await axios.post(apiUrl, f, {
				headers: headers,
			});
		} catch (err) {
			console.log(err);
			return err;
		}
	},
	getDetails: async function (operationId, apiType) {
		const headers = {
			'Ocp-Apim-Subscription-Key': '82a5177f5d814d85946fc7b95a87081c',
		};
		let apiUrl = '';
		if (apiType === 'receipt') {
			apiUrl =
				'https://form-reciept-recognizer.cognitiveservices.azure.com/formrecognizer/v2.1-preview.2/prebuilt/receipt/analyzeResults/' +
				operationId;
		} else if (apiType === 'layout') {
			apiUrl =
				'https://form-reciept-recognizer.cognitiveservices.azure.com/formrecognizer/v2.0/layout/analyzeResults/' +
				operationId;
		}
		try {
			return await axios.get(apiUrl, {
				headers: headers,
			});
		} catch (err) {
			console.log(err.response);
			return err;
		}
	},
};
