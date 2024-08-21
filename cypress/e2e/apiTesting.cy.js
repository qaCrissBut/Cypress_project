describe('API Tests for Auth/signin', () => {
    const baseUrl = 'https://qauto.forstudy.space/api';
    const signinEndpoint = '/auth/signin';
    const userCurrentEndpoint = '/users/current';
    const username = 'guest';
    const password = 'welcome2qauto';
  
    let sidValue; 
  
    beforeEach(() => {
        cy.request({
          method: 'POST',
          url: `${baseUrl}${signinEndpoint}`,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${btoa(`${username}:${password}`)}`
          },
          body: {
            email: 'testcrissbut@gmail.com',
            password: '121212Cri$$',
            remember: false
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.status).to.eq('ok');
    
          cy.getCookie('sid').then((cookie) => {
            if (cookie) {
              sidValue = cookie.value; 
              cy.log('SID Value:', sidValue); 
              cy.setCookie('sid', sidValue); 
            } else {
              cy.log('SID cookie not found');
              throw new Error('SID cookie not found');
            }
          });
      });
    });
  
    it('POST request', () => {
      cy.log('Using SID for request:', sidValue); 
      cy.request({
        method: 'POST',
        url: 'https://qauto.forstudy.space/api/cars',
        headers: {
          'Content-Type': 'application/json',
          'Cookie': `sid=${sidValue}`
        },
        body:{
          "carBrandId": 1,
          "carModelId": 1,
          "mileage": 122
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.data).to.have.property('carBrandId', 1);
        expect(response.body.data).to.have.property('carModelId', 1);
        expect(response.body.data).to.have.property('initialMileage', 122);
      });
    });
  
    it('GET request', () => {
      cy.log('Using SID for request:', sidValue); 
      cy.request({
        method: 'GET',
        url: `${baseUrl}/cars`,
        headers: {
          'Content-Type': 'application/json',
          'Cookie': `sid=${sidValue}`
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });

    it('GET expenses request', () => {
        cy.log('Using SID for request:', sidValue); 
        cy.request({
          method: 'GET',
          url: `${baseUrl}/expenses`,
          headers: {
            'Content-Type': 'application/json',
            'Cookie': `sid=${sidValue}`
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
  });
}); 
});