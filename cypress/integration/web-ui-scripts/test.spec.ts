describe('UI Scenarios', () => {
    it('open web page', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.wait(5000);
        cy.get('.search-keyword').type("ca");
        cy.wait(2000);
        cy.get('.product:visible').should('have.length', 4);
        //alternate way - getting from parent child chaining- decesentant DOM
        cy.get('.products').find('.product').should('have.length', 4);
        cy.get('.products').find('.product').eq(2).contains("ADD TO CART").click();
        //clicking an element dynamically by iterating in an array
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text();
            if (textVeg === 'Cashews') {
                cy.wrap($el).find('button').click();
            }
        })
        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')
    })
    // it('reusing locaators with aliasing', () => {
    //     cy.get('.products').as('productLocator')
    //     cy.get('@productLocator').find('.product').should('have.length', 4);
    //     cy.get('@productLocator').find('.product').eq(2).contains("ADD TO CART").click();
    // })
})


