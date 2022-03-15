import { Token, Token2 } from "../../page_model/token"

describe('test token',()=>{
    it ('POST- create a new token',()=>{
        //cy.request('POST', '/auth/connect/token', Token)
        cy.request(Token2)
        .then((response)=>{
            expect(response.status).to.eq(200)
        })
    })
})