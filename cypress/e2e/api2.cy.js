describe('Intercepting requests with Cypress', () => {
    it('should intercept and mock a GET request', () => {
      // Перехоплюємо GET запит до API
      //cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', { fixture: 'posts.json' }).as('getPosts');
      //cy.wait('@getPosts').its('response.statusCode').should('eq', 200);

      cy.intercept('GET', '/api/posts', {
        statusCode: 500,
        body: { error: 'Internal Server Error' }
      }).as('getPosts');
      


      
  
      // Робимо запит до API за допомогою cy.request()
      cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          // Перевіряємо статус код
          expect(response.status).to.eq(200);
  
        });
    });
  });
  