// cypress/e2e/auth.cy.js

describe('API Tests for Auth/signin', () => {
    const baseUrl = 'https://qauto.forstudy.space/api';
    const endpoint = '/auth/signin';
    const username = 'guest';
    const password = 'welcome2qauto';
  
    beforeEach(() => {
      // Перехоплюємо запити для подальшого аналізу
      cy.intercept('POST', `${baseUrl}${endpoint}`).as('signinRequest');
    });
  
    it('should successfully log in with valid credentials', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}${endpoint}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(`${username}:${password}`)}`
        },
        body: {
          email: 'john2.doe@example.com',
          password: 'Password123!',
          remember: false
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        // Інші перевірки відповідно до документації API
      });
    });
  
    it('should fail to log in with invalid credentials', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}${endpoint}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(`${username}:${password}`)}`
        },
        body: {
          email: 'invalid@test.com',
          password: 'WrongPassword',
          remember: false
        },
        failOnStatusCode: false // Щоб уникнути зупинки тесту при помилковому статусі
      }).then((response) => {
        expect(response.body).to.have.property('status', 'error'); // Перевірка статусу помилки
        expect(response.body).to.have.property('message', 'Wrong email or password'); // Перевірка повідомлення помилки
        // Інші перевірки відповідно до документації API
      });
    });
  });
  