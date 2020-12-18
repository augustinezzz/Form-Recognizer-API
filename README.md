# Form Recognizer API
---
The Form recognizer API is a service that uses the Microsoft Azure machine learning technology to extract teact and key-value data from document into structured data. The Form Recognizer API included the following services:

1. Receipt Analyzer API - [Full Documentation click here](https://documenter.getpostman.com/view/13907959/TVsshTDq)
2. Layout Anakyzer API - [Full Documentation click here](https://documenter.getpostman.com/view/13907959/TVsshTNi)

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

##### API Reference Documentation - [click here](https://documenter.getpostman.com/view/13907959/TVsshTNi)

### Resource Type
| Method | URL | Description |
| ----------- | ----------- | ----- |
| POST | /analyzelayout | Analyze the input document |
| GET | /getlayoutdetails | Query the document layout details |

#### POST Analyze input receipt 
1. Use the endpoint given below
```
206.189.192.25:3000/analyzereceipt

```
2. Include the input image url in JSON or upload the file from your local device
![Receipt Image URL](https://i0.wp.com/www.jeffkwong.net/wp-content/uploads/2017/11/2017-11-13-22.54.14.jpg?w=468&h=624&ssl=1)
3. Response Body will consist the operation ID of the process.
```
{
   "operation-id": "3e42847a-3de3-41ba-804f-8f781ed8512r"
 }
```
#### POST Analyze input receipt 
1. Use the endpoint given below
```
206.189.192.25:3000/analyzereceipt

```
2. Include the operation id recieved from the POST request in the body of the get request.
3. The response of the request will consist of the layout information extracted from the source image.
```
{
  "status": "succeeded",
  "createdDateTime": "2020-12-18T01:12:22Z",
  "lastUpdatedDateTime": "2020-12-18T01:12:25Z",
  "analyzeResult": {
    "version": "2.0.0",
    "readResults": [
      {
        "page": 1,
        "angle": -0.4276,
        "width": 1159,
        "height": 1787,
        "unit": "pixel",
        "language": "en",
        "lines": [
          {
            "boundingBox": [
              304,
              372,
              834,
              368,
              835,
              441,
              305,
              447
            ],
            "text": "WALMART",
            "words": [
              {
                "boundingBox": [
                  307,
                  375,
                  812,
                  369,
                  812,
                  443,
                  310,
                  447
                ],
                "text": "WALMART",
                "confidence": 0.216
              }
            ]
          },
          {
            "boundingBox": [
              321,
              452,
              793,
              450,
              793,
              470,
              321,
              474
            ],
            "text": "ALWAYS LOW PRICES ALWAYS WAL-MART",
            "words": [
              {
                "boundingBox": [
                  323,
                  454,
                  408,
                  453,
                  408,
                  474,
                  322,
                  475
                ],
                "text": "ALWAYS",
                "confidence": 0.914
              },
              {
                "boundingBox": [
                  416,
                  453,
                  460,
                  452,
                  459,
                  474,
                  416,
                  474
                ],
                "text": "LOW",
                "confidence": 0.958
              },
              {
                "boundingBox": [
                  474,
                  452,
                  561,
                  451,
                  561,
                  473,
                  474,
                  473
                ],
                "text": "PRICES",
                "confidence": 0.958
              },
              {
                "boundingBox": [
                  573,
                  451,
                  665,
                  451,
                  665,
                  472,
                  573,
                  473
                ],
                "text": "ALWAYS",
                "confidence": 0.841
              },
              {
                "boundingBox": [
                  672,
                  451,
                  792,
                  451,
                  793,
                  471,
                  672,
                  472
                ],
                "text": "WAL-MART",
                "confidence": 0.959
              }
            ]
          },
          {
            "boundingBox": [
              441,
              507,
              660,
              482,
              671,
              546,
              449,
              591
            ],
            "text": "Always :",
            "words": [
              {
                "boundingBox": [
                  444,
                  506,
                  615,
                  482,
                  628,
                  562,
                  457,
                  589
                ],
                "text": "Always",
                "confidence": 0.948
              },
              {
                "boundingBox": [
                  632,
                  482,
                  657,
                  482,
                  670,
                  555,
                  645,
                  559
                ],
                "text": ":",
                "confidence": 0.459
              }
            ]
          },
          {
            "boundingBox": [
              433,
              648,
              653,
              645,
              653,
              671,
              433,
              674
            ],
            "text": "WE SELL FOR LESS",
            "words": [
              {
                "boundingBox": [
                  434,
                  649,
                  466,
                  648,
                  466,
                  674,
                  434,
                  675
                ],
                "text": "WE",
                "confidence": 0.849
              },
              {
                "boundingBox": [
                  476,
                  648,
                  532,
                  648,
                  532,
                  673,
                  476,
                  674
                ],
                "text": "SELL",
                "confidence": 0.949
              },
              {
                "boundingBox": [
                  541,
                  648,
                  585,
                  647,
                  585,
                  672,
                  541,
                  673
                ],
                "text": "FOR",
                "confidence": 0.855
              },
              {
                "boundingBox": [
                  595,
                  647,
                  652,
                  646,
                  652,
                  672,
                  595,
                  672
                ],
                "text": "LESS",
                "confidence": 0.959
              }
            ]
          },
          {
            "boundingBox": [
              411,
              675,
              678,
              673,
              678,
              696,
              411,
              698
            ],
            "text": "MANAGER TIM STRYCZEK",
            "words": [
              {
                "boundingBox": [
                  412,
                  677,
                  502,
                  676,
                  502,
                  697,
                  412,
                  696
                ],
                "text": "MANAGER",
                "confidence": 0.839
              },
              {
                "boundingBox": [
                  520,
                  676,
                  555,
                  676,
                  555,
                  697,
                  520,
                  697
                ],
                "text": "TIM",
                "confidence": 0.888
              },
              {
                "boundingBox": [
                  571,
                  675,
                  675,
                  674,
                  675,
                  697,
                  571,
                  697
                ],
                "text": "STRYCZEK",
                "confidence": 0.849
              }
            ]
          },
          {
            "boundingBox": [
              424,
              704,
              664,
              699,
              664,
              722,
              424,
              727
            ],
            "text": "( 630 ) 213 - 7000",
            "words": [
              {
                "boundingBox": [
                  425,
                  705,
                  439,
                  704,
                  439,
                  727,
                  425,
                  727
                ],
                "text": "(",
                "confidence": 0.799
              },
              {
                "boundingBox": [
                  451,
                  704,
                  491,
                  703,
                  491,
                  726,
                  451,
                  727
                ],
                "text": "630",
                "confidence": 0.953
              },
              {
                "boundingBox": [
                  498,
                  703,
                  515,
                  702,
                  514,
                  725,
                  498,
                  725
                ],
                "text": ")",
                "confidence": 0.799
              },
              {
                "boundingBox": [
                  529,
                  702,
                  571,
                  701,
                  571,
                  724,
                  529,
                  725
                ],
                "text": "213",
                "confidence": 0.959
              },
              {
                "boundingBox": [
                  580,
                  701,
                  595,
                  701,
                  594,
                  724,
                  579,
                  724
                ],
                "text": "-",
                "confidence": 0.894
              },
              {
                "boundingBox": [
                  611,
                  701,
                  664,
                  700,
                  663,
                  723,
                  611,
                  724
                ],
                "text": "7000",
                "confidence": 0.849
              }
            ]
          },
          {
            "boundingBox": [
              290,
              754,
              794,
              751,
              794,
              774,
              290,
              778
            ],
            "text": "ST# 1420 OP# 00000533 TE# 10 TR# 09139",
            "words": [
              {
                "boundingBox": [
                  291,
                  755,
                  331,
                  755,
                  331,
                  778,
                  291,
                  778
                ],
                "text": "ST#",
                "confidence": 0.896
              },
              {
                "boundingBox": [
                  344,
                  755,
                  399,
                  755,
                  399,
                  778,
                  344,
                  778
                ],
                "text": "1420",
                "confidence": 0.863
              },
              {
                "boundingBox": [
                  411,
                  755,
                  453,
                  755,
                  453,
                  778,
                  411,
                  778
                ],
                "text": "OP#",
                "confidence": 0.469
              },
              {
                "boundingBox": [
                  464,
                  755,
                  573,
                  755,
                  573,
                  777,
                  464,
                  778
                ],
                "text": "00000533",
                "confidence": 0.912
              },
              {
                "boundingBox": [
                  585,
                  755,
                  625,
                  754,
                  626,
                  776,
                  585,
                  776
                ],
                "text": "TE#",
                "confidence": 0.956
              },
              {
                "boundingBox": [
                  638,
                  754,
                  663,
                  754,
                  663,
                  775,
                  638,
                  776
                ],
                "text": "10",
                "confidence": 0.929
              },
              {
                "boundingBox": [
                  678,
                  754,
                  719,
                  753,
                  719,
                  774,
                  678,
                  775
                ],
                "text": "TR#",
                "confidence": 0.909
              },
              {
                "boundingBox": [
                  730,
                  753,
                  794,
                  752,
                  794,
                  772,
                  730,
                  774
                ],
                "text": "09139",
                "confidence": 0.925
              }
            ]
          },
          {
            "boundingBox": [
              292,
              783,
              399,
              782,
              399,
              801,
              292,
              802
            ],
            "text": "GATORADE",
            "words": [
              {
                "boundingBox": [
                  294,
                  783,
                  399,
                  783,
                  399,
                  802,
                  293,
                  803
                ],
                "text": "GATORADE",
                "confidence": 0.589
              }
            ]
          },
          {
            "boundingBox": [
              462,
              781,
              648,
              780,
              648,
              800,
              462,
              802
            ],
            "text": "005200033831 F",
            "words": [
              {
                "boundingBox": [
                  463,
                  783,
                  622,
                  780,
                  622,
                  801,
                  464,
                  802
                ],
                "text": "005200033831",
                "confidence": 0.799
              },
              {
                "boundingBox": [
                  635,
                  780,
                  647,
                  780,
                  647,
                  801,
                  635,
                  801
                ],
                "text": "F",
                "confidence": 0.847
              }
            ]
          },
          {
            "boundingBox": [
              714,
              778,
              795,
              778,
              795,
              798,
              714,
              799
            ],
            "text": "2.07 E",
            "words": [
              {
                "boundingBox": [
                  715,
                  779,
                  770,
                  778,
                  771,
                  799,
                  716,
                  799
                ],
                "text": "2.07",
                "confidence": 0.724
              },
              {
                "boundingBox": [
                  782,
                  778,
                  795,
                  779,
                  795,
                  798,
                  782,
                  798
                ],
                "text": "E",
                "confidence": 0.799
              }
            ]
          },
          {
            "boundingBox": [
              289,
              810,
              357,
              810,
              358,
              829,
              289,
              829
            ],
            "text": "CANDY",
            "words": [
              {
                "boundingBox": [
                  290,
                  811,
                  358,
                  810,
                  358,
                  829,
                  290,
                  830
                ],
                "text": "CANDY",
                "confidence": 0.231
              }
            ]
          },
          {
            "boundingBox": [
              461,
              806,
              649,
              805,
              649,
              827,
              461,
              828
            ],
            "text": "004000006002 F",
            "words": [
              {
                "boundingBox": [
                  462,
                  806,
                  625,
                  806,
                  625,
                  827,
                  462,
                  827
                ],
                "text": "004000006002",
                "confidence": 0.846
              },
              {
                "boundingBox": [
                  637,
                  806,
                  650,
                  806,
                  649,
                  826,
                  636,
                  827
                ],
                "text": "F",
                "confidence": 0.852
              }
            ]
          },
          {
            "boundingBox": [
              717,
              804,
              797,
              806,
              797,
              826,
              717,
              824
            ],
            "text": "4.36 K",
            "words": [
              {
                "boundingBox": [
                  719,
                  805,
                  768,
                  805,
                  768,
                  826,
                  718,
                  824
                ],
                "text": "4.36",
                "confidence": 0.909
              },
              {
                "boundingBox": [
                  781,
                  806,
                  794,
                  806,
                  793,
                  826,
                  781,
                  826
                ],
                "text": "K",
                "confidence": 0.849
              }
            ]
          },
          {
            "boundingBox": [
              289,
              835,
              624,
              831,
              625,
              855,
              290,
              858
            ],
            "text": "LISTERINE X 031254742855",
            "words": [
              {
                "boundingBox": [
                  291,
                  838,
                  411,
                  836,
                  411,
                  857,
                  291,
                  858
                ],
                "text": "LISTERINE",
                "confidence": 0.953
              },
              {
                "boundingBox": [
                  438,
                  835,
                  451,
                  835,
                  451,
                  856,
                  438,
                  856
                ],
                "text": "X",
                "confidence": 0.894
              },
              {
                "boundingBox": [
                  464,
                  835,
                  623,
                  832,
                  622,
                  856,
                  463,
                  856
                ],
                "text": "031254742855",
                "confidence": 0.57
              }
            ]
          },
          {
            "boundingBox": [
              716,
              831,
              799,
              832,
              799,
              852,
              716,
              851
            ],
            "text": "4.48 K",
            "words": [
              {
                "boundingBox": [
                  717,
                  832,
                  770,
                  832,
                  770,
                  852,
                  717,
                  851
                ],
                "text": "4.48",
                "confidence": 0.848
              },
              {
                "boundingBox": [
                  782,
                  832,
                  795,
                  833,
                  795,
                  852,
                  782,
                  852
                ],
                "text": "K",
                "confidence": 0.848
              }
            ]
          },
          {
            "boundingBox": [
              290,
              862,
              425,
              861,
              425,
              881,
              291,
              883
            ],
            "text": "ODOR EATER",
            "words": [
              {
                "boundingBox": [
                  292,
                  863,
                  344,
                  862,
                  344,
                  883,
                  292,
                  884
                ],
                "text": "ODOR",
                "confidence": 0.762
              },
              {
                "boundingBox": [
                  358,
                  862,
                  425,
                  862,
                  424,
                  881,
                  358,
                  882
                ],
                "text": "EATER",
                "confidence": 0.958
              }
            ]
          },
          {
            "boundingBox": [
              463,
              859,
              624,
              859,
              624,
              881,
              463,
              882
            ],
            "text": "001150900446",
            "words": [
              {
                "boundingBox": [
                  464,
                  861,
                  625,
                  859,
                  624,
                  882,
                  464,
                  881
                ],
                "text": "001150900446",
                "confidence": 0.929
              }
            ]
          },
          {
            "boundingBox": [
              717,
              856,
              798,
              858,
              797,
              879,
              717,
              876
            ],
            "text": "4.76 E",
            "words": [
              {
                "boundingBox": [
                  718,
                  857,
                  769,
                  857,
                  769,
                  879,
                  718,
                  875
                ],
                "text": "4.76",
                "confidence": 0.82
              },
              {
                "boundingBox": [
                  781,
                  859,
                  793,
                  860,
                  793,
                  879,
                  781,
                  879
                ],
                "text": "E",
                "confidence": 0.799
              }
            ]
          },
          {
            "boundingBox": [
              290,
              888,
              395,
              888,
              395,
              908,
              290,
              908
            ]
            }
     }
  }
}
```
