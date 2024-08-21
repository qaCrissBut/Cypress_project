describe("search links ", () => {
  const { namep, passwordp } = Cypress.env(); 
  
  before(() => {
    cy.visit(`https://${namep}:${passwordp}@qauto.forstudy.space/`, {
      failOnStatusCode: false,
    });
  });

  it('type gest-login ', () => {
      
  cy.get("button.hero-descriptor_btn", {timeout:1000}).click();
  cy.get('.modal-content').should("be.visible")
  cy.get("[aria-label=Close]", {timeout:4000}).click();

  cy.get('a[href="https://www.facebook.com/Hillel.IT.School"]').should('exist')
  cy.get('a[href="https://t.me/ithillel_kyiv"]').should('exist')
  cy.get('a[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]').should('exist')
  cy.get('a[href="https://www.instagram.com/hillel_itschool/"]').should('exist')
  cy.get('a[href="https://www.linkedin.com/school/ithillel/"]').should('exist')
  cy.get('a[href="https://ithillel.ua"]').should('exist')
  cy.get('.contacts_link.h4').should('exist')
  });
});