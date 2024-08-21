describe("registration form testing", () => {
    const { namep, passwordp } = Cypress.env(); 

beforeEach(() => {
    cy.visit(`https://${namep}:${passwordp}@qauto.forstudy.space/`, {
      failOnStatusCode: false,
    });
  });

it('testing the correct registration ', () => {

    cy.get("button.hero-descriptor_btn", {timeout:1000}).click();
    cy.get('.modal-content').should("be.visible");


    cy.get('input#signupName').type('Criss');
    cy.get('input#signupLastName').type('But');
    cy.get('input#signupEmail').type('testcrissbut@gmail.com');
    cy.get('input#signupPassword').type('121212Cri$$');
    cy.get('input#signupRepeatPassword').type('121212Cri$$');
    cy.wait(1000);
    cy.get('button[type="button"]').eq(1).should('not.contain.disabled').click();
    cy.url().should('include', '/panel/garage');
  });
});