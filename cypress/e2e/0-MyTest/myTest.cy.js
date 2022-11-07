describe('Login validation', () => {
    it('Validator rejects incorrect input', () => {
        cy.visit('http://127.0.0.1:5500');
        // cy.get('input#email').type('testingss@knoroff.no', { delay: 500 });
        // cy.get('input#password').type('asdf{enter}', { delay: 500 });
        // cy.url().should('include', '/index');
        // cy;
        // .get("#logout-btn")
        // .click()
        // .should(() => {
        //   expect(localStorage.getItem("token")).to.be.null;
        // }),
        // { delay: 1000 };
    });
});
