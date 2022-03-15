import { Shipment } from "../../page_model/shipments";

describe('testing shipments API', () => {
    it('POST- creata a new shipment - status 201', ()=>{
        cy.request(Shipment)
        .then((res)=>{
            expect(res.status).to.eq(201)
        })
        .its('body')
        .should('include', {message:"Shipment created successfully"}) 
    })

});