class SignUpPage {
  visit() {
    cy.visit('/customer/account/create/');
  }

  fillFirstName(firstName) {
    cy.get('#firstname').type(firstName);
  }

  fillLastName(lastName) {
    cy.get('#lastname').type(lastName);
  }

  fillEmail(email) {
    cy.get('#email_address').type(email);
  }

  fillPassword(password) {
    cy.get('#password').type(password);
  }

  fillConfirmPassword(password) {
    cy.get('#password-confirmation').type(password);
  }

  submit() {
    cy.get('button[title="Create an Account"]').click();
  }
}

module.exports = new SignUpPage(); 