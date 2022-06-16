## Project: Invoices App APIs

## End-point: Get All Invoices
get all invoices
### Method: GET
>```
>https://frontend-mentors-invoices-app.herokuapp.com/api/invoices/
>```
### Body (**raw**)

```json

```

### Response: 200
```json
[
    {
        "billingClient": {
            "clientName": "Jensen Huang",
            "clientEmail": "jensenh@mail.com",
            "clientAddress": "106 Kendell Street-Sharrington-NR24 5WQ-United Kingdom"
        },
        "_id": "62ab18b3f2a499ebf8c59c2b",
        "invoiceID": "RT3080",
        "senderAddress": "19 Union Terrace-London-E1 3EZ-United Kingdom",
        "invoiceDate": "2021-08-18T00:00:00.000Z",
        "paymentDue": "2021-08-19T00:00:00.000Z",
        "paymentTerms": 1,
        "status": 3,
        "description": "Re-branding",
        "items": [
            {
                "name": "Brand Guidelines",
                "quantity": 1,
                "price": 1800.9,
                "total": 1800.9
            }
        ],
        "__v": 0,
        "createdAt": "2022-06-16T11:49:07.281Z",
        "updatedAt": "2022-06-16T11:49:07.281Z"
    },
    {
        "billingClient": {
            "clientName": "Alex Grim",
            "clientEmail": "alexgrim@mail.com",
            "clientAddress": "84 Church Way-Bradford-BD1 9PB-United Kingdom"
        },
        "_id": "62ab18b3f2a499ebf8c59c2c",
        "invoiceID": "XM9141",
        "senderAddress": "19 Union Terrace-London-E1 3EZ-United Kingdom",
        "invoiceDate": "2021-08-21T00:00:00.000Z",
        "paymentDue": "2021-09-20T00:00:00.000Z",
        "paymentTerms": 30,
        "status": 2,
        "description": "Graphic Design",
        "items": [
            {
                "name": "Banner Design",
                "quantity": 1,
                "price": 156,
                "total": 156
            },
            {
                "name": "Email Design",
                "quantity": 2,
                "price": 200,
                "total": 400
            }
        ],
        "__v": 0,
        "createdAt": "2022-06-16T11:49:07.281Z",
        "updatedAt": "2022-06-16T11:49:07.281Z"
    },
    {
        "billingClient": {
            "clientName": "John Morrison",
            "clientEmail": "jm@myco.com",
            "clientAddress": "79 Dover Road-Westhall-IP19 3PF-United Kingdom"
        },
        "_id": "62ab18b3f2a499ebf8c59c2d",
        "invoiceID": "RG0314",
        "senderAddress": "19 Union Terrace-London-E1 3EZ-United Kingdom",
        "invoiceDate": "2021-09-24T00:00:00.000Z",
        "paymentDue": "2021-10-01T00:00:00.000Z",
        "paymentTerms": 7,
        "status": 3,
        "description": "Website Redesign",
        "items": [
            {
                "name": "Website Redesign",
                "quantity": 1,
                "price": 14002.33,
                "total": 14002.33
            }
        ],
        "__v": 0,
        "createdAt": "2022-06-16T11:49:07.281Z",
        "updatedAt": "2022-06-16T11:49:07.281Z"
    },
    {
        "billingClient": {
            "clientName": "Alysa Werner",
            "clientEmail": "alysa@email.co.uk",
            "clientAddress": "63 Warwick Road-Carlisle-CA20 2TG-United Kingdom"
        },
        "_id": "62ab18b3f2a499ebf8c59c2e",
        "invoiceID": "RT2080",
        "senderAddress": "19 Union Terrace-London-E1 3EZ-United Kingdom",
        "invoiceDate": "2021-10-11T00:00:00.000Z",
        "paymentDue": "2021-10-12T00:00:00.000Z",
        "paymentTerms": 1,
        "status": 2,
        "description": "Logo Concept",
        "items": [
            {
                "name": "Logo Sketches",
                "quantity": 1,
                "price": 102.04,
                "total": 102.04
            }
        ],
        "__v": 0,
        "createdAt": "2022-06-16T11:49:07.281Z",
        "updatedAt": "2022-06-16T11:49:07.281Z"
    },
    {
        "billingClient": {
            "clientName": "Mellisa Clarke",
            "clientEmail": "mellisa.clarke@example.com",
            "clientAddress": "46 Abbey Row-Cambridge-CB5 6EG-United Kingdom"
        },
        "_id": "62ab18b3f2a499ebf8c59c2f",
        "invoiceID": "AA1449",
        "senderAddress": "19 Union Terrace-London-E1 3EZ-United Kingdom",
        "invoiceDate": "2021-10-06T22:00:00.000Z",
        "paymentDue": "2021-10-14T00:00:00.000Z",
        "paymentTerms": 7,
        "status": 2,
        "description": "Re-branding",
        "items": [
            {
                "name": "New Logo",
                "quantity": 1,
                "price": 1532.33,
                "total": 1532.33
            },
            {
                "name": "Brand Guidelines",
                "quantity": 1,
                "price": 2500,
                "total": 2500
            }
        ],
        "__v": 0,
        "createdAt": "2022-06-16T11:49:07.281Z",
        "updatedAt": "2022-06-16T11:49:07.281Z"
    },
    {
        "billingClient": {
            "clientName": "Thomas Wayne",
            "clientEmail": "thomas@dc.com",
            "clientAddress": "3964  Queens Lane-Gotham-60457-United States of America"
        },
        "_id": "62ab18b3f2a499ebf8c59c30",
        "invoiceID": "TY9141",
        "senderAddress": "19 Union Terrace-London-E1 3EZ-United Kingdom",
        "invoiceDate": "2021-10-01T00:00:00.000Z",
        "paymentDue": "2021-10-31T00:00:00.000Z",
        "paymentTerms": 30,
        "status": 2,
        "description": "Landing Page Design",
        "items": [
            {
                "name": "Web Design",
                "quantity": 1,
                "price": 6155.91,
                "total": 6155.91
            }
        ],
        "__v": 0,
        "createdAt": "2022-06-16T11:49:07.281Z",
        "updatedAt": "2022-06-16T11:49:07.281Z"
    },
    {
        "billingClient": {
            "clientName": "Anita Wainwright",
            "clientEmail": "",
            "clientAddress": ""
        },
        "_id": "62ab18b3f2a499ebf8c59c31",
        "invoiceID": "FV2353",
        "senderAddress": "19 Union Terrace-London-E1 3EZ-United Kingdom",
        "invoiceDate": "2021-11-05T00:00:00.000Z",
        "paymentDue": "2021-11-12T00:00:00.000Z",
        "paymentTerms": 7,
        "status": 1,
        "description": "Logo Re-design",
        "items": [
            {
                "name": "Logo Re-design",
                "quantity": 1,
                "price": 3102.04,
                "total": 3102.04
            }
        ],
        "__v": 0,
        "createdAt": "2022-06-16T11:49:07.281Z",
        "updatedAt": "2022-06-16T11:49:07.281Z"
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get invoice by id
get invoice details by id
### Method: GET
>```
>https://frontend-mentors-invoices-app.herokuapp.com/api/invoices/{{id}}
>```
### Response: 200
```json
{
    "billingClient": {
        "clientName": "Jensen Huang",
        "clientEmail": "jensenh@mail.com",
        "clientAddress": "106 Kendell Street-Sharrington-NR24 5WQ-United Kingdom"
    },
    "_id": "62ab18b3f2a499ebf8c59c2b",
    "invoiceID": "RT3080",
    "senderAddress": "19 Union Terrace-London-E1 3EZ-United Kingdom",
    "invoiceDate": "2021-08-18T00:00:00.000Z",
    "paymentDue": "2021-08-19T00:00:00.000Z",
    "paymentTerms": 1,
    "status": 3,
    "description": "Re-branding",
    "items": [
        {
            "name": "Brand Guidelines",
            "quantity": 1,
            "price": 1800.9,
            "total": 1800.9
        }
    ],
    "__v": 0,
    "createdAt": "2022-06-16T11:49:07.281Z",
    "updatedAt": "2022-06-16T11:49:07.281Z"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Create new invoice
add new invoice to DB  
for saving it as a draft:  

``` json
{"status": 1}

```

for saving it as a final version:  

``` json
{"status": 2}

```
### Method: POST
>```
>https://frontend-mentors-invoices-app.herokuapp.com/api/invoices/create
>```
### Body (**raw**)

```json
{
    "invoiceDate": "2022-06-16",
    "description": "Re-branding",
    "paymentTerms": 90,
    "status": "1",
    "billingClient": {
        "clientName": "Noha M.",
        "clientEmail": "noha_m@mail.com",
        "clientAddress": "6th of October-Giza-Egypt"
    },
    "senderAddress": "19 Union Terrace-London-E1 3EZ-United Kingdom",
    "items": [
        {
            "name": "Brand Guidelines",
            "quantity": 1,
            "price": 1800.90,
            "total": 1800.90
        }
    ]
}
```

### Response: 201
```json
{
    "invoiceID": "ZF9499",
    "senderAddress": "19 Union Terrace-London-E1 3EZ-United Kingdom",
    "invoiceDate": "2022-06-16T00:00:00.000Z",
    "paymentDue": "2022-09-14T00:00:00.000Z",
    "paymentTerms": 90,
    "status": 1,
    "description": "Re-branding",
    "billingClient": {
        "clientName": "Noha M.",
        "clientEmail": "noha_m@mail.com",
        "clientAddress": "6th of October-Giza-Egypt"
    },
    "items": [
        {
            "name": "Brand Guidelines",
            "quantity": 1,
            "price": 1800.9,
            "total": 1800.9
        }
    ],
    "_id": "62ab2c36e37f3a7cbac585b9",
    "createdAt": "2022-06-16T13:12:22.750Z",
    "updatedAt": "2022-06-16T13:12:22.750Z",
    "__v": 0
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Edit Invoice by id
edit invoice by id
### Method: GET
>```
>https://frontend-mentors-invoices-app.herokuapp.com/api/invoices/{{id}}
>```
### Body (**raw**)

```json
{
    "senderAddress": "19 Union Terrace-London-E1 3EZ-United Kingdom"
}
```

### Response: 200
```json
{
    "billingClient": {
        "clientName": "Jensen Huang",
        "clientEmail": "jensenh@mail.com",
        "clientAddress": "106 Kendell Street-Sharrington-NR24 5WQ-United Kingdom"
    },
    "_id": "62ab18b3f2a499ebf8c59c2b",
    "invoiceID": "RT3080",
    "senderAddress": "19 Union Terrace-London-E1 3EZ-United Kingdom",
    "invoiceDate": "2021-08-18T00:00:00.000Z",
    "paymentDue": "2021-08-19T00:00:00.000Z",
    "paymentTerms": 1,
    "status": 3,
    "description": "Re-branding",
    "items": [
        {
            "name": "Brand Guidelines",
            "quantity": 1,
            "price": 1800.9,
            "total": 1800.9
        }
    ],
    "__v": 0,
    "createdAt": "2022-06-16T11:49:07.281Z",
    "updatedAt": "2022-06-16T11:49:07.281Z"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete invoice by id
### Method: DELETE
>```
>https://frontend-mentors-invoices-app.herokuapp.com/api/invoices/{{id}}
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Change invoice status
change invoice status from pending to paid
### Method: GET
>```
>https://frontend-mentors-invoices-app.herokuapp.com/api/invoices/changeStatus
>```
### Body (**raw**)

```json
{
    "id": {{id}},
    "status":1
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Filter invoices by status
filter invoices by status:  
status = 1 for drafts

status = 2 for pending

status = 3 for paid
### Method: POST
>```
>https://frontend-mentors-invoices-app.herokuapp.com/api/invoices/filter
>```
### Body (**raw**)

```json
{
    "filterOptions": {"status": 3}
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
