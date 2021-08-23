const baseUrl = 'https://lunch.devbstaging.com/login-password';
// #region selectors
const usernameSelector = '[name=email]';
const passwordSelector = '[name=password]';
const loginButtonSelector = ".v-btn__content";
// #endregion

exports.LoginPage = class LoginPage {

  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(baseUrl);
  }

  async enterCredentials(username, password) {
    await this.page.fill(usernameSelector, username.toString());
    await this.page.fill(passwordSelector, password.toString());
  }

  async loginButtonClick() {
    await this.page.click(loginButtonSelector);
    await this.waitForLoginComplete();
  }

  async waitForLoginComplete() {
    await this.page.waitForSelector(loginButtonSelector, { "state": 'hidden' });
  }
}