class LoginPage {
    visit() {
        const newLogin = Cypress.env('newLogin');
        const newPassword = Cypress.env('newPassword');
        cy.visit(`https://${newLogin}:${newPassword}@saucedemo.com`, {
            failOnStatusCode: false,
        });
    }

    fillUsername(username) {
        if (username) {
        cy.get('input#user-name').type(username);
    }
}
    fillPassword(password) {
        if (password) {
            cy.get('input#password').type(password);
        }
    }

    clickLoginButton() {
        cy.get('input#login-button').click();
    }
    
    login(username, password) {
        this.fillUsername(username);
        this.fillPassword(password);
        this.clickLoginButton();
    }
}

export default LoginPage;