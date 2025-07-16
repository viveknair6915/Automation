const SignUpPage = require('../pages/SignUpPage');

const userFixturePath = 'cypress/fixtures/user.json';

function saveUserToFixture(email, password) {
  cy.writeFile(userFixturePath, { email, password });
}

describe('Sign Up Flow', () => {
  it('should create a new account successfully', () => {
    const firstName = 'Test';
    const lastName = 'User';
    const email = `testuser_${Date.now()}@mailinator.com`;
    const password = 'Test@12345';

    SignUpPage.visit();
    SignUpPage.fillFirstName(firstName);
    SignUpPage.fillLastName(lastName);
    SignUpPage.fillEmail(email);
    SignUpPage.fillPassword(password);
    SignUpPage.fillConfirmPassword(password);
    SignUpPage.submit();

    cy.contains('Thank you for registering').should('be.visible');

    // Save credentials for other tests
    saveUserToFixture(email, password);
  });
}); 