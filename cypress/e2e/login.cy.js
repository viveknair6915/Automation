const LoginPage = require('../pages/LoginPage');

describe('Login Flow', () => {
  before(() => {
    cy.fixture('user').as('user');
  });

  it('should login with the created account', function () {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/customer/account/logout/');
    cy.wait(2000);

    cy.visit('/customer/account/login/');

    cy.get('#email', { timeout: 10000 }).should('be.visible');
    cy.get('#pass', { timeout: 10000 }).should('be.visible');

    // Fill in the login form
    cy.get('#email').clear().type(this.user.email);
    cy.get('#pass').clear().type(this.user.password);

    // Click only the visible Sign In button inside the login form
    cy.get('form.form-login button[type="submit"]')
      .filter(':visible')
      .should('have.length', 1)
      .click();

    // Assert successful login by checking the visible heading and user email
    cy.get('h1.page-title span').should('contain.text', 'My Account');
    cy.contains(this.user.email).should('be.visible');
  });
}); 