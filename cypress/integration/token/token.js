
import { Token2 } from "../../page_model/token"
let ttt = '';

describe('test token', () => {
    it('POST- create a new token', () => {
        cy.request(Token2)
            .then((response) => {
                expect(response.status).to.eq(200)
            })
            .should((resp) => {
                ttt = resp.body.access_token

            })
    })
    it('tessttttt', () => {

        cy.request(Token2)
            .then((response) => {
                expect(response.status).to.eq(200)
            })
            .should((resp) => {
                ttt = resp.body.access_token
                cy.request({
                    method: 'POST',
                    url: 'https://serviceavailabilityintegration.electioapp.com:16161/v1/pickUpLocationLocator',
                    failOnStatusCode: false,
                    headers: {
                        'Authorization': 'Bearer ' + ttt
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

    })

})
