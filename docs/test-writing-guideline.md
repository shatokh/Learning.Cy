# Naming Conventions and Best Practices for Test Writing

## 2. Naming Conventions

Follow the Naming Conventions: Maintain consistency in your naming practices across test files. Use clear, descriptive names for describe, context, and it blocks. Test names should provide insight into what the test is verifying.

Example:

```js
describe('Login Functionality', () => {
  context('Valid credentials', () => {
    it('should allow the user to login successfully', () => {
      // Test implementation
    });
  });
});
```

## 2. Tagging Strategy

Avoid using tags in tests whenever possible. If tags are required, ensure that the Tagging Strategy is consistently followed throughout the tests.

## 3. Localization Testing

Organize the central storage for localization values used in the application. Make sure to use values from the app build to ensure consistency between the tests and the actual application.

## 4. Test Independence

Each test should be independent and not rely on other tests. Tests should be organized and ordered within the file.

Test Isolation: Configure the describe block with the testIsolation: false parameter to maintain browser and session data across tests if needed. Only one describe block should be present per test file.

Example:

```js
describe('User Registration', { testIsolation: false }, () => {
  it('should create a new user', () => {
    // Test implementation
  });
});
```

## 5. Test Data Isolation

Ensure that test data is isolated for each test file. Do not use shared test data across different test files to prevent dependencies and test failures.

## 6. Avoid Hard Coded Values in Tests

Do not use hard-coded values in tests. Store values such as selectors, requirements, localization values, etc., in separate files or variables. This improves readability and maintainability.

Example:

```js
const loginButton = 'button#login';

cy.get(loginButton).click();
```

## 7. Test Structure

IT Block:
The IT block specifies the expected result (use case) and includes only the verification steps.

Provide detailed descriptions, especially for errors. Avoid generic messages like "Should return 401 Unauthorized error." Include more specific details such as the actual error messages.

Ensure that there is only one check per it block.

Example:

```js
it('should display an error message when incorrect credentials are provided', () => {
  cy.get('.error-message').should('contain.text', 'Invalid credentials');
});
```

Context Block:
The Context block outlines the conditions under which the tests should be run and includes setup steps common to several it blocks.

Use the Context block to group similar scenarios together.

Describe Block:
The Describe block defines the part of the functionality under test and optimizes scenarios for use cases.

Group your tests logically within the Describe block to avoid duplication and ensure clarity.

## 8. Do Not Automate Manual Test Cases

Directly replicating manual test cases in automation can be impractical and costly, often yielding minimal benefits. Instead, focus on automating the most valuable and critical test cases that bring value to the project.

Automation should aim to reduce manual testing efforts, focusing on functionality, regression, and edge cases.

## 9. Do Not Hide Selectors

Avoid using utility functions that obscure the selector. For instance:

```js
cy.getTitleByKey('filter').should('have.text', 'Filter');
```

Selectors should be stored in a selectors.js file, grouped by pages and components. This helps maintain clean and easily maintainable code. Use well-named variables for selectors to make debugging and refactoring easier.

Example:

```js
const continueShoppingBtn = cartPage.continueShopping;

cy.get(continueShoppingBtn).click();
```

## 10. Provide Skipped Empty Context and IT Blocks

    Track test coverage by including descriptions for non-automated use cases. Leave the corresponding it and context blocks unimplemented and mark them as skipped.

Example:

```js
Copy;
context('Payment functionality', () => {
  it.skip('should process payment successfully', () => {
    // Skip this test for now
  });
});
```

## 11. Test Data Randomization

    Randomize test data to avoid reusing the same data for all tests. This ensures that tests are more robust and not dependent on hardcoded values.

Use libraries like faker.js or chance.js to generate random test data.

Example:

```js
const randomEmail = faker.internet.email();
cy.get('input[name="email"]').type(randomEmail);
```
