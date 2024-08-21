describe('API Tests for Auth/signin', () => {
    const baseUrl = 'https://qauto.forstudy.space/api';
    const signinEndpoint = '/auth/signin';
    const userCurrentEndpoint = '/users/current';
    const username = 'guest';
    const password = 'welcome2qauto';
  
    before(() => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}${signinEndpoint}`,
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
        expect(response.body.status).to.eq('ok');
  
        // Получение куки и отладка
        cy.getCookie('sid').then((cookie) => {
          if (cookie) {
            cy.log('SID Value:', cookie.value); // Отладочное сообщение
            cy.setCookie('sid', cookie.value); // Устанавливаем куку вручную для последующих запросов
          } else {
            cy.log('SID cookie not found'); // Отладочное сообщение
            throw new Error('SID cookie not found');
          }
        });
      });
    });
  
    it('should successfully retrieve user info with valid session cookie', () => {
      cy.getCookie('sid').then((cookie) => {
        if (cookie) {
          cy.request({
            method: 'GET',
            url: `${baseUrl}${userCurrentEndpoint}`,
            headers: {
              'Content-Type': 'application/json',
            },
            cookies: {
              'sid': cookie.value
            },
            failOnStatusCode: false // Чтобы обработать ошибку, а не прерывать тест
          }).then((response) => {
            expect(response.status).to.eq(200); // Ожидаем успешный статус
          });
        } else {
          cy.log('SID cookie not found in test'); // Отладочное сообщение
          throw new Error('SID cookie not found in test');
        }
      });
    });
  });