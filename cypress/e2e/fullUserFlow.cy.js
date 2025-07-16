describe('Full User Flow: Signup, Login, Signout, Change Password', () => {
  const firstName = 'Test';
  const lastName = 'User';
  const email = `testuser_${Date.now()}@mailinator.com`;
  const password = 'Test@12345';
  const newPassword = 'Test@54321';

  it('should complete the full user flow', () => {
    // 1. Sign up with improved selectors and waits
    cy.visit('/customer/account/create/');
    cy.get('#firstname').should('be.visible').type(firstName);
    cy.get('#lastname').should('be.visible').type(lastName);
    cy.get('#email_address').should('be.visible').type(email);
    cy.get('#password').should('be.visible').type(password);
    cy.get('#password-confirmation').should('be.visible').type(password);
    
    // Use the specific selector for the Create an Account button
    cy.get('button[title="Create an Account"]').should('be.visible').click();
    
    // Wait for either success message or redirect to account page
    cy.url().should('include', '/customer/account/');
    cy.get('h1.page-title span').should('contain.text', 'My Account');

    // 2. Sign out with force-show approach
    cy.get('.customer-welcome').filter(':visible').eq(0).trigger('mouseover');
    cy.get('.customer-menu').invoke('show');
    cy.get('.customer-menu a').contains('Sign Out').should('be.visible').click();
    cy.contains('You are signed out').should('be.visible');

    // 3. Login with robust assertions
    cy.visit('/customer/account/login/');
    cy.get('#email').clear().type(email);
    cy.get('#pass').clear().type(password);
    cy.get('form.form-login button[type="submit"]').filter(':visible').click();
    cy.url().should('include', '/customer/account/');
    cy.get('h1.page-title span').should('contain.text', 'My Account');

    // 4. Change password with proper checkbox handling
    cy.visit('/customer/account/edit/');
    cy.get('#change-password').check();
    cy.get('#current-password').type(password);
    cy.get('#password').type(newPassword);
    cy.get('#password-confirmation').type(newPassword);
    cy.get('button[title="Save"]').filter(':visible').click();
    cy.contains('You saved the account information').should('be.visible');

    // 5. Verify password change worked
    cy.visit('/customer/account/login/');
    cy.get('#email').clear().type(email);
    cy.get('#pass').clear().type(newPassword);
    cy.get('form.form-login button[type="submit"]').filter(':visible').click();
    cy.url().should('include', '/customer/account/');
    cy.get('h1.page-title span').should('contain.text', 'My Account');

    // 6. Final sign out - force-show approach
    cy.get('.customer-welcome').filter(':visible').eq(0).trigger('mouseover');
    cy.get('.customer-menu').invoke('show');
    cy.get('.customer-menu a').contains('Sign Out').should('be.visible').click();
    cy.contains('You are signed out').should('be.visible');

    // 7. Final login verification
    cy.visit('/customer/account/login/');
    cy.get('#email').clear().type(email);
    cy.get('#pass').clear().type(newPassword);
    cy.get('form.form-login button[type="submit"]').filter(':visible').click();
    cy.url().should('include', '/customer/account/');
    cy.get('h1.page-title span').should('contain.text', 'My Account');
  });
}); 