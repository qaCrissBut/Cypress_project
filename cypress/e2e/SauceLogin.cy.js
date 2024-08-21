import LoginPage from "../pageObject/LoginPage";
import InventoryPage from '../pageObject/InventoryPage';

describe("Login Tests", () => {
    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();

    beforeEach(() => {
        loginPage.visit(); 
    });

it("should log in successfully with valid credentials", () => {
loginPage.login("standard_user", "secret_sauce");

cy.url().should("include", "/inventory.html");

});


it("should be faild log in with invalid user name", () => {
    loginPage.login("user", "secret_sauce");
    
    cy.get('div.error-message-container').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');

});


it("should be faild log in with invalid password name", () => {
    loginPage.login("visual_user", 111);
    
    cy.get('div.error-message-container').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
});


it("should be faild log in with empty password name", () => {
    loginPage.login("visual_user", "");
    loginPage.clickLoginButton();

    cy.get('div.error-message-container').should('contain.text', 'Epic sadface: Password is required');

});

it("should be faild log in with empty user name", () => {
    loginPage.login("", "secret_sauce");
    loginPage.clickLoginButton();

    cy.get('div.error-message-container').should('contain.text', 'Epic sadface: Username is required');

});

it("burger-menu is visible on the inventore page", () => {
    loginPage.login("visual_user", "secret_sauce");

        cy.get('#react-burger-menu-btn').should('be.visible');

    });

it("shopping cart is visible on the inventore page", () => {
        loginPage.login("visual_user", "secret_sauce");
    
            cy.get('#shopping_cart_container').should('be.visible');
});

it("drop down is visible on the inventore page", () => {
        loginPage.login("visual_user", "secret_sauce");
    
            cy.get('.product_sort_container').should('be.visible');
});

it("filter drop down containы four options", () => {
    loginPage.login("visual_user", "secret_sauce");
    

    inventoryPage.checkProductSortContainer(4);
});

it("checking the Item Page opening after iten clicking", () => {
    loginPage.login("standard_user", "secret_sauce");


    cy.get('#item_0_title_link').click();
    cy.url().should("include", "/inventory-item.html?id=0");
});
});