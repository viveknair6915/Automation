const LoginPage = require('../pages/LoginPage');
const AccountPage = require('../pages/AccountPage');
const ChangePasswordPage = require('../pages/ChangePasswordPage');

const userFixturePath = 'cypress/fixtures/user.json';

describe('Change Password Flow', () => {
  let user;
  const newPassword = 'Test@54321';

  before(() => {
    cy.fixture('user').then((u) => {
      user = u;
    });
  });

  it('should change the password successfully', () => {
    // Log in first
    LoginPage.visit();
    LoginPage.fillEmail(user.email);
    LoginPage.fillPassword(user.password);
    LoginPage.submit();
    cy.contains('My Account').should('be.visible');

    // Change password
    AccountPage.goToChangePassword();
    ChangePasswordPage.fillCurrentPassword(user.password);
    ChangePasswordPage.fillNewPassword(newPassword);
    ChangePasswordPage.fillConfirmPassword(newPassword);
    ChangePasswordPage.submit();
    cy.contains('You saved the account information').should('be.visible');

    // Update fixture with new password
    cy.writeFile(userFixturePath, { email: user.email, password: newPassword });
  });
}); 