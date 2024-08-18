class InventoryPage {
 
    visit() {
        // Метод для перехода на страницу инвентаря
        cy.visit('https://www.saucedemo.com/inventory.html');
    }

    
        clickBurgerButton() {
            cy.get('#react-burger-menu-btn').click();
        }

        clickProductSortContainer() {
            cy.get('.product_sort_container').click();
        }

        checkProductSortContainer(expectedCount) {
            cy.get('.product_sort_container') // Убедитесь, что этот селектор верный
                .find('option') // Ищем опции внутри дропдауна
                .should('have.length', expectedCount); // Проверяем количество опций
        }

        clickShoppingCartContainer() {
            cy.get('#shopping_cart_container').click();
        }
        
        clickInventoryItemName () {
            cy.get('#item_0_title_link').click();
        }   
 
        clickAddToCart() {
            cy.get('#add-to-cart').click();
        }

        clickShoppingCartLink() {
            cy.get('.shopping_cart_link').click();
        }

        clickCheckout() {
            cy.get('#checkout').click();
        }

        fillFirstName(firstName) {
            cy.get('#first-name').type(firstName);
        }

        fillLastName(lastName) {
            cy.get('#last-name').type(lastName);
        }

        fillPostalCode(postalCode) {
            cy.get('#postal-code').type(postalCode);
        }

        clickContinue() {
            cy.get('#continue').click();
        }

        clickFinish() {
            cy.get('#finish').click();
        }

        clickBackHome() {
            cy.get('#back-to-products').click;
        }


}










export default InventoryPage;