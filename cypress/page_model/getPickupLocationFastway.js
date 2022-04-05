import { Token2 } from "./token";

let tokenGenerated = '';
export const PickupLocationWithTokenAuth = {
    pickupLocation() {
        return cy.request(Token2)
            .should((resp) => {
                tokenGenerated = resp.body.access_token
                cy.request({
                    method: 'POST',
                    url: 'https://serviceavailabilityintegration.electioapp.com:16161/v1/pickUpLocationLocator',
                    failOnStatusCode: false,
                    headers: {
                        'Authorization': 'Bearer ' + tokenGenerated,
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
    }
}







//requestul de PickupLocation

// export const PickupLocation = {
//     method: 'POST',
//     url: 'https://serviceavailabilityintegration.electioapp.com:16161/v1/pickUpLocationLocator',
//     failOnStatusCode: false,
//     headers: {
//         'Authorization': 'Bearer ' + tg,
//     },
//     body: {
//         "Address":
//         {
//             "Town": "",
//             "Postcode": "N39 C3X4",
//             "Region": "",
//             "ShippingLocationReference": null,
//             "AddressLine1": "Edward Street",
//             "AddressLine2": "string",
//             "AddressLine3": "string",
//             "Country":
//             {
//                 "IsoCode":
//                 {
//                     "TwoLetterCode": "IE"
//                 }
//             }
//         },
//         "MaximumDistance": 100,
//         "MaximumNumberOfResults": 1,
//         "DeliveryDate": "2022-04-04T13:42:00.062Z",
//         "MpdCarrierServices":
//             [
//                 {
//                     "ServiceDirection": "outbound",
//                     "Journey":
//                         [
//                             {
//                                 "CarrierService":
//                                 {
//                                     "Reference": "FSWAY-00005",
//                                     "CarrierReference": "FSWAY-00005",
//                                     "CarrierName": "FASTWAY"
//                                 },

//                                 "CarrierAccountReference": "BOOHOOX_FSWAY"
//                             }
//                         ]
//                 }
//             ]
//     }
// }


