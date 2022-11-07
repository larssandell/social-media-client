/* eslint-disable */
describe('test the login verification', () => {
    it('can login as valid user', () => {
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
        cy.wait(700);
        // new post
        cy.get('a.btn.btn-outline-success').click({ force: true });
        cy.wait(200);
        cy.get('input#postTitle').type('Ronjas title', {
            delay: 500,
        });
        cy.wait(200);
        cy.get('textarea#postBody').type('Ronjas Msg FTW!', {
            delay: 500,
        });
        cy.get('.btn-success').contains('Publish').click({ force: true });
    });
});
