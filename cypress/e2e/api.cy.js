describe('API Testing with Cypress', () => {
    it('GET request', () => {
      cy.request('https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal', 200);
    });
  
    it('POST request', () => {
      cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('title', 'foo');
      });
    });
  });