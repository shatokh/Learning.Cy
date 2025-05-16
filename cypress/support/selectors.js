// support/selectors.js
export const loginPage = {
  username: '[data-test="username"]',
  password: '[data-test="password"]',
  loginButton: '[data-test="login-button"]',
  errorMessage: '[data-test="error"]',
  errorContainer: '.error-message-container',
  errorButton: '[data-test="error-button"]',
  errorIcon: '[data-icon="times-circle"]',
  errors: {
    usernameIsRequired:            'Epic sadface: Username is required',
    passwordIsRequired:            'Epic sadface: Password is required',
    lockedOutUser:                 'Epic sadface: Sorry, this user has been locked out.',
    incorrectUsernameOrPassword:   'Epic sadface: Username and password do not match any user in this service',
    unauthorizedAccess:            "Epic sadface: You can only access '/inventory.html' when you are logged in."
  }
};

export const headerComp = {
  title: '.app_logo',
  openCart: '[data-test="shopping-cart-link"]',
  cartBadge: '[data-test="shopping-cart-badge"]',
  sidebar: {
    container: '.bm-menu-wrap',
    open: '.bm-burger-button button',
    close: '.bm-cross-button',
    openInventory: '[data-test="inventory-sidebar-link"]',
    logout: '[data-test="logout-sidebar-link"]',
    resetAppState: '[data-test="reset-sidebar-link"]',
    openAbout: '[data-test="about-sidebar-link"]',
  },
};

export const colours = {
  ERROR: 'rgb(226, 35, 26)'
};

export default {
  loginPage,
  headerComp,
  colours
};