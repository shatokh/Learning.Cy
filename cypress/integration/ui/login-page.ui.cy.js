import { userRoles } from '../../support/commands';

describe('LoginPage: Given Login page opened', { testIsolation: false }, () => {
  let standardUser, lockedUser;

  before(() => {
    cy.getUserDataByRole(userRoles.STANDARD).then((user) => {
      standardUser = user;
    });
    cy.getUserDataByRole(userRoles.LOCKED).then((user) => {
      lockedUser = user;
    });
    cy.visit('/');
  });

  context('Login page checks', () => {
    it('Title should be displayed', () => {
      cy.title().should('eq', 'Swag Labs');
      // Test implementation
    });
    it('Then User should see login field', () => {
      cy.get(loginPage.username).should('be.visible');
    });
    it('Then User should see password field', () => {
      cy.get(loginPage.password).should('be.visible');
    });
    it('Then User should see login button', () => {
      cy.get(loginPage.loginButton).should('be.visible');
    });
  });

  context('Login with standard user', () => {
    it('Then User should be able to login with standard user', () => {
      cy.get(loginPage.username).type(standardUser.username);
      cy.get(loginPage.password).type(standardUser.password);
      cy.get(loginPage.loginButton).click();
      cy.url().should('include', '/inventory.html');
    });
  });
});