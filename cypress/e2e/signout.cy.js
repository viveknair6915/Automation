const LoginPage = require('../pages/LoginPage');
const AccountPage = require('../pages/AccountPage');

describe('Sign Out Flow', () => {
  let user;
  before(() => {
    cy.fixture('user').then((u) => {
      user = u;
    });
  });

  it('should sign out successfully', () => {
    // Log in first
    LoginPage.visit();
    LoginPage.fillEmail(user.email);
    LoginPage.fillPassword(user.password);
    LoginPage.submit();
    cy.contains('My Account').should('be.visible');

    // Now sign out
    AccountPage.signOut();
    cy.contains('You are signed out').should('be.visible');
  });
}); 