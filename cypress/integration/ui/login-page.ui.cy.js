import { loginPage, headerComp, colours } from '../../support/selectors';
import { userRoles } from '../../support/commands';
import { urls } from '../../support/urls';


describe('Login and Logout flow', { testIsolation: false }, () => {
  let standardUser, lockedUser;

  before(() => {
    cy.getUserDataByRole(userRoles.STANDARD)
      .then(u => (standardUser = u));
    cy.getUserDataByRole(userRoles.LOCKED)
      .then(u => (lockedUser = u));
    cy.visit('/');
  });

  context('Login page checks', () => {
    it('Title should be displayed', () => {
      cy.title()
        .should('eq', 'Swag Labs');
    });

    it('Username field is visible', () => {
      cy.get(loginPage.username)
        .should('be.visible');
    });

    it('Password field is visible', () => {
      cy.get(loginPage.password)
        .should('be.visible');
    });

    it('Login button is visible', () => {
      cy.get(loginPage.loginButton)
        .should('be.visible');
    });
  });

  context('Login with standard user', () => {
    it('logs in successfully with valid credentials', () => {
      cy.get(loginPage.username)
        .type(standardUser.username);
      cy.get(loginPage.password)
        .type(standardUser.password);
      cy.get(loginPage.loginButton)
        .click();
      cy.url()
        .should('include', '/inventory.html');
    });
  });

  context('Logout with standard user', () => {
    before(() => {
      cy.url()
        .should('include', '/inventory.html');
      cy.get(headerComp.sidebar.open)
        .click();
      cy.then(() => {
        cy.get(headerComp.sidebar.logout)
          .click();
      });
    });

    it('Logout.Title should be displayed', () => {
      cy.title()
        .should('eq', 'Swag Labs');
    });

    it('Logout.Username field is visible', () => {
      cy.get(loginPage.username)
        .should('be.visible');
    });

    it('Logout.Password field is visible', () => {
      cy.get(loginPage.password)
        .should('be.visible');
    });

    it('Logout.Login Button is visible', () => {
      cy.get(loginPage.loginButton)
        .should('be.visible');
    });

    it('Logout.Error message should not be shown', () => {
      cy.get(loginPage.errorMessage)
        .should('not.exist');
    });
  });

  context('LoginPage.Negative: login without credentials', () => {
    before(() => {
      cy.get(loginPage.loginButton)
        .click();
    });

    it('LoginPage.Negative: Red error message is displayed', () => {
      cy.get(loginPage.errorMessage)
        .should('have.text', loginPage.errors.usernameIsRequired)
        .and('be.visible');
      cy.get(loginPage.errorContainer)
        .should('have.css', 'background-color', colours.ERROR);
    });

    it('LoginPage.Negative: Red cross for closing error message is displayed', () => {
      cy.get(loginPage.errorButton)
        .should('be.visible')
        .and('be.enabled');
    });

    it('LoginPage.Negative: Username field should be highlighted and contain error icon', () => {
      cy.get(loginPage.username)
        .should('have.css', 'border-bottom-color', colours.ERROR)
        .parent()
        .find(loginPage.errorIcon)
        .should('be.visible');
    });

    it('LoginPage.Negative: Password field should be highlighted and contain error icon', () => {
      cy.get(loginPage.password)
        .should('have.css', 'border-bottom-color', colours.ERROR)
        .parent()
        .find(loginPage.errorIcon)
        .should('be.visible');
    });

    after(() => {
      cy.get(loginPage.username)
        .clear();
      cy.get(loginPage.password)
        .clear();
    });
  })

  context('LoginPage.Negative: login without password', () => {
    before(() => {
      cy.get(loginPage.username)
        .type(standardUser.username, { delay: 0 });
      cy.get(loginPage.loginButton)
        .click();
    });

    it('LoginPage.Negative: Red error message is displayed', () => {
      cy.get(loginPage.errorMessage)
        .should('have.text', loginPage.errors.passwordIsRequired)
        .and('be.visible');
      cy.get(loginPage.errorContainer)
        .should('have.css', 'background-color', colours.ERROR);
    });

    it('LoginPage.Negative: Red cross for closing error message is displayed', () => {
      cy.get(loginPage.errorButton)
        .should('be.visible')
        .and('be.enabled');
    });

    // TODO: BUG.Username field should not be highlighted and not contain error icon for login without password
    // this check is skipped because the username field is highlighted and contains error icon
    it.skip('LoginPage.Negative: Username field should not be highlighted and not contain error icon', () => {
      cy.get(loginPage.username)
        .should('not.have.css', 'border-bottom-color', colours.ERROR)
        .parent()
        .find(loginPage.errorIcon)
        .should('not.exist');
    });

    it('LoginPage.Negative: Password field should be highlighted and contain error icon', () => {
      cy.get(loginPage.password)
        .should('have.css', 'border-bottom-color', colours.ERROR)
        .parent()
        .find(loginPage.errorIcon)
        .should('be.visible');
    });

    after(() => {
      cy.get(loginPage.username)
        .clear();
    });
  });

  context('Login with lockedUser user', () => {
    it('Login failed for lockedUser with valid credentials', () => {
      cy.get(loginPage.username)
        .type(lockedUser.username);
      cy.get(loginPage.password)
        .type(lockedUser.password);
      cy.get(loginPage.loginButton)
        .click();

      cy.get(loginPage.errorMessage)
        .should('have.text', loginPage.errors.lockedOutUser)
        .and('be.visible');
      cy.get(loginPage.errorContainer)
        .should('have.css', 'background-color', colours.ERROR);
    });
  });

  context('LoginPage.Negative: direct inventory access without login', () => {
    before(() => {
      cy.visit(urls.pages.inventory, { failOnStatusCode: false });
    });

    it('LoginPage.Negative: Unauthorized access error is displayed', () => {
      cy.get(loginPage.errorMessage)
        .should('have.text', loginPage.errors.unauthorizedAccess)
        .and('be.visible');
      cy.get(loginPage.errorContainer)
        .should('have.css', 'background-color', colours.ERROR);
    });

    it('LoginPage.Negative: Red cross for closing error message is displayed', () => {
      cy.get(loginPage.errorButton)
        .should('be.visible')
        .and('be.enabled');
    });

    after(() => {
      cy.get(loginPage.errorButton)
        .click();
    });
  });
});
