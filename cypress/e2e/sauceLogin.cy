describe("saucedemo login test", () => {

beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');

});

it('it should be succesfull login with valid creds ', () => {

    cy.get('input#user-name').should('be.visible');
    cy.get('input#password').should('be.visible');


    cy.get('input#user-name').type('standard_user');
    cy.get('input#password').type('secret_sauce');

    cy.get('input#login-button"]').click();
    cy.url().should('include', '/inventory.html');
});
});
