class LoginPage {
  visit() {
    return cy.visit('/customer/account/login/');
  }

  fillEmail(email) {
    return cy.get('#email').clear().type(email);
  }

  fillPassword(password) {
    return cy.get('#pass').clear().type(password);
  }

  submit() {
    return cy.get('button[title="Sign In"]').click();
  }
}

module.exports = new LoginPage(); 