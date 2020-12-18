# Form Recognizer API
---
The Form recognizer API is a service that uses the Microsoft Azure machine learning technology to extract teact and key-value data from document into structured data. The Form Recognizer API included the following services:

1. Receipt Analyzer API - [Full Documentation click here](https://documenter.getpostman.com/view/13907959/TVsshTDq)
2. Layout Anakyzer API - [Full Documentation click here](https://documenter.getpostman.com/view/13907959/TVsshTDq)

## Receipt Analyzer 
---

The Receipt Analyzer API makes use of the Form Recognizer API v2.1 developed by  Microsoft Azure. The receipt analyzer uses the Microsoft optical character recognition (OCR)and receipt models to detect and extract data from the receipts such as the transaction date, transaction amount, phone number, merchant name, etc.

##### API Reference Documentation - [click here](https://documenter.getpostman.com/view/13907959/TVsshTDq)

### Resource Type
| Method | URL | Description |
| ----------- | ----------- | ----- |
| POST | /analyzereceipt | Analyze the input receipt |
| GET | /getreceiptdetails | Query the input receipt |

#### POST - Analyze input receipt 
1. Use the endpoint given below
```
206.189.192.25:3000/analyzereceipt

```
2. Include the input image url in JSON or upload the file from your local device
![Receipt Image URL](https://i0.wp.com/www.jeffkwong.net/wp-content/uploads/2017/11/2017-11-13-22.54.14.jpg?w=468&h=624&ssl=1)
3. Response Body will consist the operation ID of the process.
```
{
   "operation-id": "8e62847a-3de3-41ba-804f-8f781ed8574e"
 }
```
#### GET -  Get receipt data 

1. Use the endpoint given below
```
206.189.192.25:3000/analyzereceipt

```
2. Include the operation id recieved from the POST request in the body of the get request.
3. The response of the request will consist of all the data extracted from the source image.
```
{
  "status": "succeeded",
  "createdDateTime": "2020-12-17T23:26:26Z",
  "lastUpdatedDateTime": "2020-12-17T23:26:29Z",
  "analyzeResult": {
    "version": "2.1.0",
    "readResults": [
      {
        "page": 1,
        "angle": -0.5233,
        "width": 1159,
        "height": 1787,
        "unit": "pixel"
      }
    ],
    "documentResults": [
      {
        "docType": "prebuilt:receipt",
        "pageRange": [
          1,
          1
        ],
        "fields": {
          "ReceiptType": {
            "type": "string",
            "valueString": "Itemized",
            "confidence": 0.984
          },
          "MerchantName": {
            "type": "string",
            "valueString": "WALMART",
            "text": "WALMART",
            "boundingBox": [
            
            "page": 1,
            "confidence": 0.514
          },
          "MerchantPhoneNumber": {
            "type": "phoneNumber",
            "valuePhoneNumber": "+16302137000",
            "text": "( 630 ) 213 - 7000",
            "boundingBox"
                    "confidence": 0.916
                  },
                  "TotalPrice": {
                    "type": "number",
                    "valueNumber": 4.36,
                    "text": "4.36",
                    "boundingBox": [
                      718,
                      803,
                      770,
          
                    "valueNumber": 4.48,
                    "text": "4.48",
                    "boundingBox": [
                      718,
                      831,      718,
                      855
                    ],
                    "page": 1,
                    "confidence": 0.836
                  }
                }
              },
              {
                "type": "object",
                "valueObject": {
                  "Name": {
                    "type": "string",
                    "valueString": "ODOR EATER",
                    "text": "ODOR EATER",
                    "boundingBox": [
                      290.8,
                      862,
                      422.8,     291,
                      885
                    ],
                    "page": 1,
                    "confidence": 0.916
                  },
                  "TotalPrice": {
                    "type": "number",
                    "valueNumber": 4.76,
                    "text": "4.76",
                    "boundingBox": [
                    
       
              984.4
            ],
            "page": 1,
            "confidence": 0.948
          },
          "Total": {
            "type": "number",
            "valueNumber": 26.12,
            "text": "26.12",
            "boundingBox": [
              703,

            ],
            "page": 1,
            "confidence": 0.988
          }
        }
      }
    ]
  }
```


## Layout Analyzer
---
The Layout Analyzer API makes use of the Form Recognizer API v2.1 developed by Microsoft Azure. The layout analyzer uses the Microsoft optical character recognition (OCR)and to extract the text and the table structure of the documents.


### Resource Type
| Method | URL | Description |
| ----------- | ----------- | ----- |
| POST | /analyzelayout | Analyze the input document |
| GET | /getlayoutdetails | Query the document layout details |

#### POST Analyze input receipt 

```
206.189.192.25:3000/analyzereceipt

```
#### POST Analyze input receipt 
```
206.189.192.25:3000/analyzereceipt

```
