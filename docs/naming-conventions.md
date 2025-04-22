# Naming conventions

## Table of Contents

## Test file naming convention

- Use kebab case for test file naming:
  - Integration API test file:
    - Pattern: `module-name.submodule-name.test-type.cy.js`
    - Example: `audits.settings-audit-round.api.cy.js`
  - Integration UI test file:
    - Pattern: `page-name.component-name.test-type.cy.js`
    - Example: `cart-page.ui.cy.js`
  - E2E test file:
    - Pattern: `flow-name.test-type.cy.js`
    - Example: `complete-purchase.ui.cy.js`

## Test description convention

- Use scenario-based style for naming.

### Describe block title

- Provide module and submodule names.
- Use PascalCase for module and submodule names for component tests and user flow for E2E tests.
- Patterns:
  - Integration tests: `ModuleName.SubmoduleName: Given 'preconditions'`
  - PageName.ComponentName: Given 'preconditions'`
  - E2E tests: `FlowName.SubFlowName: Given 'preconditions'`

### Context block title

- Provide the condition.
- Patterns:
  - Integration tests: `ModuleName.SubmoduleName.Endpoint.CRUD: When 'condition'`
  - PageName.ComponentName.USER_ROLE: When 'condition'`
  - E2E tests: `FlowName.SubFlowName.USER_ROLE: When 'condition'`

### It block title

- Provide the expected result.
- Patterns:
  - Integration tests: `ModuleName.SubmoduleName.Endpoint.CRUD: Then 'expected result'`
  - PageName.ComponentName.USER_ROLE: Then 'expected result'`
  - E2E tests: `FlowName.SubFlowName.USER_ROLE: Then 'expected result'`

## Cypress commands naming convention

- Use camelCase for naming methods and commands.
- Group commands by endpoint or page.
- Use an underscore `_` to separate endpoint or page name from action.
- Pattern: `checkoutPage_FillDeliveryInfo`

## UI elements localization keys naming convention

- Use a hierarchical structure to organize keys by page and component.
- Use camelCase for naming.
- Pattern: `pageName.componentName.element` or `pageName.element`
- Example:

```json
{
  "checkoutCompletePage": {
    "title": "Checkout: Complete!",
    "messageTitle": "Thank you for your order!",
    "message": "Your order has been dispatched, and will arrive just as fast as the pony can get there!",
    "backHome": "Back Home"
  }
}
```
