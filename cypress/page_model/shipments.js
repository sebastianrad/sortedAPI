import { boohooGroupToken } from "../support/apiKeys";
import {  createShipmentsUrl } from "../support/routes";

export const Shipment = {
    method: 'POST',
    url: createShipmentsUrl,
    failOnStatusCode: false,
    // Auth: {
    //   //  key: "x-api-key", value: 'YjM5MDMxMjdlMmY3NDYwMWFiNWU3YTZhZjhiNTU0OWM='
    // },
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip',
        'x-api-version': '1.1',
        'x-api-key': boohooGroupToken
    },
    body: {
        "shipment_type": "on_demand",
        "contents": [
            {
                "custom_reference": "b9fa91b0-0dd0-4dd5-986f-363fa8cb2386",
                "package_size_reference": null,
                "weight": {
                    "value": 2.40,
                    "unit": "Kg"
                },
                "dimensions": {
                    "unit": "Cm",
                    "width": 15.0,
                    "height": 15.5,
                    "length": 20.0
                },
                "description": "Jeans",
                "value": {
                    "amount": 8.99,
                    "currency": "GBP"
                },
                "sku": "SKU09876",
                "model": "MOD-009",
                "country_of_origin": "PT",
                "harmonisation_code": "09021000",
                "shipping_terms": "fca",
                "quantity": 2,
                "unit": "Box",
                "metadata": [
                    {
                        "key": "Category",
                        "value": "Menswear",
                        "type": "string"
                    }
                ],
                "label_properties": null,
                "Contents": null
            }
        ],
        "addresses": [
            {
                "address_type": "Origin",
                "contact": {
                    "reference": "co_9953035290535460864",
                    "title": "Mr",
                    "first_name": "Mark",
                    "last_name": "Brunell",
                    "contact_details": {
                        "mobile": "+447495747987",
                        "email": "mark@62-7.com"
                    }
                },
                "property_number": "1",
                "property_name": "Frank's Place",
                "address_line1": "Zappa Avenue",
                "address_line2": "Off Rock Road",
                "address_line3": "Off Heavy Crescent",
                "locality": "Manchester",
                "region": "Greater Manchester",
                "postal_code": "M2 6LW",
                "country_iso_code": "GB"
            },
            {
                "address_type": "destination",
                "custom_reference": "21bbd58a-6dec-4097-9106-17501ddca38d",
                "contact": {
                    "reference": "co_9953035290535460865",
                    "title": "Mr",
                    "first_name": "Gardner",
                    "last_name": "Minshew",
                    "middle_name": null,
                    "position": null,
                    "contact_details": {
                        "landline": null,
                        "mobile": "+447495747987",
                        "email": "gminshew@test.com"
                    }
                },
                "property_number": "8",
                "property_name": null,
                "address_line1": "Norbert Road",
                "address_line2": "Bertwistle",
                "address_line3": null,
                "locality": "Preston",
                "region": "Lancashire",
                "postal_code": "PR4 5LE",
                "country_iso_code": "GB",
                "lat_long": null
            }
        ]

    }
}
