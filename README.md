# Form-Recognizer-API

The Receipt Analyzer API makes use of the Form Recognizer API v2.1 developed by  Microsoft Azure. The receipt analyzer uses the Microsoft optical character recognition (OCR)and receipt models to detect and extract data from the receipts such as the transaction date, transaction amount, phone number, merchant name, etc.

Extract field text and semantic values from a given receipt document. The input document must be of one of the supported content types - 'application/pdf', 'image/jpeg', 'image/png' or 'image/tiff'. Alternatively, use 'application/json' type to specify the Url location of the document to be analyzed

### Resource Type
| Method | URL | Description |
| ----------- | ----------- | ----- |
| POST | /analyzereceipt | Analyze the input receipt |
| GET | /getreceiptdetails | Query the input receipt |

