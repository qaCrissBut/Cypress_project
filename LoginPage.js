class LoginPage {
    visit() {
        const namep = Cypress.env('namep');
        const passwordp = Cypress.env('passwordp');
        cy.visit(`https://${namep}:${passwordp}@qauto.forstudy.space/`, {
            failOnStatusCode: false,
        });
    }

    clickSignInButton() {
        cy.get('button.header_signin').first().click();
    }

    fillEmail(email) {
        cy.get('input#signinEmail').type(email);
    }
    

    fillPassword(password) {
        cy.get('input#signinPassword').typePassword(password);
    }

    clickLoginButton() {
        cy.get('div.modal-footer').within(() => {
            cy.get('button.btn-primary').click();
        });
    }

    login(email, password) {
        this.clickSignInButton();
        this.fillEmail(email);
        this.fillPassword(password);
        this.clickLoginButton();
    }
}

export default LoginPage;