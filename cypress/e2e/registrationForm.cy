describe("registration form testing", () => {
  const { namep, passwordp } = Cypress.env(); 

  
  beforeEach(() => {
    cy.visit(`https://${namep}:${passwordp}@qauto.forstudy.space/`, {
      failOnStatusCode: false,
    });
  });

 it('testing the empty fields ', () => {
      
  cy.get("button.hero-descriptor_btn", {timeout:1000}).click();
  cy.get('.modal-content').should("be.visible");

  cy.get('input#signupName').focus().blur();
  cy.get('input#signupName').should('have.css', 'color', 'rgb(73, 80, 87)');
  cy.get('.invalid-feedback').should('contain.text', 'Name required');

  cy.get('input#signupLastName').focus().blur();
  cy.get('input#signupLastName').should('have.css', 'color', 'rgb(73, 80, 87)');
  cy.get('.invalid-feedback').should('contain.text', 'Last name required');

  cy.get('input#signupEmail').focus().blur();
  cy.get('input#signupEmail').should('have.css', 'color', 'rgb(73, 80, 87)');
  cy.get('.invalid-feedback').should('contain.text', 'Email required');

  cy.get('input#signupPassword').focus().blur();
  cy.get('input#signupPassword').should('have.css', 'color', 'rgb(73, 80, 87)');
  cy.get('.invalid-feedback').should('contain.text', 'Password required');

  cy.get('input#signupRepeatPassword').focus().blur();
  cy.get('input#signupRepeatPassword').should('have.css', 'color', 'rgb(73, 80, 87)');
  cy.get('.invalid-feedback').should('contain.text', 'Re-enter password required');
  cy.get('button[type="button"]').should('be.disabled');
  cy.get('button.close').click();
});

 it('testing the wrong data ', () => {

  cy.get("button.hero-descriptor_btn", {timeout:1000}).click();
  cy.get('.modal-content').should("be.visible");
 
  cy.get('input#signupName').type('нет').blur();
  cy.get('input#signupName').should('have.css', 'color', 'rgb(73, 80, 87)');
  cy.get('.invalid-feedback').should('contain.text', 'Name is invalid');

  cy.get('input#signupLastName').type('также нет').blur();
  cy.get('input#signupLastName').should('have.css', 'color', 'rgb(73, 80, 87)');
  cy.get('.invalid-feedback').should('contain.text', 'Last name is invalid');

  cy.get('input#signupEmail').type('duckmal.com').blur();
  cy.get('input#signupEmail').should('have.css', 'color', 'rgb(73, 80, 87)');
  cy.get('div.invalid-feedback p').contains('Email is incorrect');

  cy.get('input#signupPassword').type('11625F8009').blur();
  cy.get('input#signupLastName').should('have.css', 'color', 'rgb(73, 80, 87)');
  cy.get('div.invalid-feedback p').contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');
   
    
  cy.get('input#signupRepeatPassword').type('11625F8009').blur();
  cy.get('input#signupLastName').should('have.css', 'color', 'rgb(73, 80, 87)');
  cy.get('div.invalid-feedback p').contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');
  cy.get('button[type="button"]').should('be.disabled');
  cy.get('button.close').click();
});

 it('testing the wrong length ', () => {
      
  cy.get("button.hero-descriptor_btn", {timeout:1000}).click();
  cy.get('.modal-content').should("be.visible");

  cy.get('input#signupName').type('a').blur();
  cy.get('input#signupLastName').should('have.css', 'color', 'rgb(73, 80, 87)');
  cy.get('div.invalid-feedback p').contains('Name has to be from 2 to 20 characters long').should('be.visible');
      
  cy.get('input#signupLastName').type('a').blur();
  cy.get('input#signupLastName').should('have.css', 'color', 'rgb(73, 80, 87)');
  cy.get('div.invalid-feedback p').contains('Name has to be from 2 to 20 characters long').should('be.visible');

  cy.get('input#signupEmail').type('testcrissbut@gmail.com');
  cy.get('input#signupPassword').type('11625F8a009');
  cy.get('input#signupRepeatPassword').type('11625F8a009');
  cy.get('button[type="button"]').should('be.disabled');

});

});
  
  

  

  
 

