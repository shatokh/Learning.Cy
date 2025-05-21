export const userRoles = {
  STANDARD: 'standard_user',
  LOCKED: 'locked_out_user',
};

Cypress.Commands.add('getUserDataByRole', (role) => {
  if (!Object.values(userRoles).includes(role)) {
    throw new Error(`Invalid user: ${role}`);
  }

  const user = Cypress.env(`${role}-data`);
  if (user) {
    cy.log(`User found in environment for role: ${role}`);
    return cy.wrap(user);
  }

  return cy.fixture('sensitive-data/env-users.json').then((data) => {

    const userData = data.users[role];
    if (!userData) {
      throw new Error(`User data not found for role: ${role}`);
    }
    Cypress.env(`${role}-data`, userData);
    return cy.wrap(userData);
  });
});

