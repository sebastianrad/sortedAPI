import { Token2 } from "../../page_model/token"
import { PickupLocationWithTokenAuth } from "../../page_model/getPickupLocationFastway";



export let tokenGenerated = ''
export let tg = '123'


describe('add token in to test', () => {
    before('generate token', () => {
        cy.request(Token2)
            .then((response) => {
                expect(response.status).to.eq(200)
            })
            .should((resp) => {
                //  cy.log(JSON.stringify(resp.body))
                //  expect(resp.body.access_token).to.eq(Test.getValuesFromTabel(resp.body.access_token))
                tokenGenerated = resp.body.access_token


            })
    })
    it('check the first test', () => {
        cy.request({
            method: 'POST',
            url: 'https://serviceavailabilityintegration.electioapp.com:16161/v1/pickUpLocationLocator',
            failOnStatusCode: false,
            headers: {
                'Authorization': 'Bearer ' + tokenGenerated,
                // 'Content-Type': 'application/json',
                // 'User-Agent': 'PostmanRuntime/7.29.0',
                // 'Accept': '*/*',
                // 'Postman-Token': 'cdb9ee69-dd1a-4e8e-9d0d-98e37388e0c8',
                // 'Host': 'serviceavailabilityintegration.electioapp.com:16161',
                // 'Accept-Encoding': 'gzip, deflate, br',
                // 'Connection': 'keep-alive',
                // 'Content-Length': '923'
            },
            body: {
                "Address":
                {
                    "Town": "",
                    "Postcode": "N39 C3X4",
                    "Region": "",
                    "ShippingLocationReference": null,
                    "AddressLine1": "Edward Street",
                    "AddressLine2": "string",
                    "AddressLine3": "string",
                    "Country":
                    {
                        "IsoCode":
                        {
                            "TwoLetterCode": "IE"
                        }
                    }
                },
                "MaximumDistance": 100,
                "MaximumNumberOfResults": 10,
                "DeliveryDate": "2022-04-04T13:42:00.062Z",
                "MpdCarrierServices":
                    [
                        {
                            "ServiceDirection": "outbound",
                            "Journey":
                                [
                                    {
                                        "CarrierService":
                                        {
                                            "Reference": "FSWAY-00005",
                                            "CarrierReference": "FSWAY-00005",
                                            "CarrierName": "FASTWAY"
                                        },

                                        "CarrierAccountReference": "BOOHOOX_FSWAY"
                                    }
                                ]
                        }
                    ]
            }
        })
    })
    it('check the second test', () => {

        PickupLocationWithTokenAuth.pickupLocation()
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    })


})
