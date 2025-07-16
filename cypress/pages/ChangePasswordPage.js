class ChangePasswordPage {
  fillCurrentPassword(currentPassword) {
    cy.get('#current-password').type(currentPassword);
  }

  fillNewPassword(newPassword) {
    cy.get('#password').type(newPassword);
  }

  fillConfirmPassword(newPassword) {
    cy.get('#password-confirmation').type(newPassword);
  }

  submit() {
    cy.get('button[title="Save"]').click();
  }
}

module.exports = new ChangePasswordPage(); 