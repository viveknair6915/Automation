class AccountPage {
  signOut() {
    cy.get('.customer-welcome').click();
    cy.contains('Sign Out').click();
  }

  goToChangePassword() {
    cy.visit('/customer/account/edit/');
  }
}

module.exports = new AccountPage(); 