import {PickupLocationWithTokenAuth } from "../../page_model/getPickupLocationFastway";

describe('testing PickupLocation API', () => {
     it('POST- creata a new shipment PickupLocation - status 200', () => {

        PickupLocationWithTokenAuth.pickupLocation()
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    })

});