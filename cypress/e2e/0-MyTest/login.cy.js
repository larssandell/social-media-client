/* eslint-disable */
describe('test the login verification', () => {
    it('can login as valid user', () => {
        // error
        cy.visit('http://127.0.0.1:5500/');
        cy.wait(500);
        cy.get('div.modal-footer > .btn-outline-success')
            .eq(1)
            .click({ force: true });
        cy.wait(500);
        cy.get('input#loginEmail').type('testingss@knoroff.no', { delay: 500 });
        cy.get('input#loginPassword').type('asdf1', { delay: 500 });
        cy.get('div.modal-footer > .btn-outline-success')
            .eq(1)
            .click({ force: true });
        // ok user
        cy.wait(1000);
        cy.visit('http://127.0.0.1:5500/');
        cy.wait(500);
        cy.get('div.modal-footer > .btn-outline-success')
            .eq(1)
            .click({ force: true });
        cy.wait(500);
        cy.get('input#loginEmail').type('ronjatester@noroff.no', {
            delay: 500,
        });
        cy.get('input#loginPassword').type('lars123456{enter}', { delay: 500 });
    });
});
