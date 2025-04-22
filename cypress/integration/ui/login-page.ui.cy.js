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
      cy.get('[data-test="username"]').should('be.visible');
    });
    it('Then User should see password field', () => {
      cy.get('[data-test="password"]').should('be.visible');
    });
    it('Then User should see login button', () => {
      cy.get('[data-test="login-button"]').should('be.visible');
    });
  });
});