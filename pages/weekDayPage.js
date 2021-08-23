const baseUrl = "https://lunch.devbstaging.com";
// #region selectors
const logoutButtonSelector = "#app > div.application--wrap > div > nav > div";
const currentDaySelector = "#app > div.application--wrap > div > nav > div > div.v-toolbar__title > span";
// #region modal dialog
const dialogSelector = "#app > div.v-dialog__content.v-dialog__content--active > div";
const closeDialogSelector = ".gray--text > div:nth-child(1)";
// #endregion
// #endregion
exports.WeekDayPage = class WeekDayPage {

    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(baseUrl);
    }

    async logout() {
        await this.page.click(logoutButtonSelector);
        await this.waitForLogoutComplete()
    }

    async logoutButtonExists() {
        return this.page.isVisible(logoutButtonSelector);
    }

    async waitForLogoutComplete() {
        await this.page.waitForSelector(logoutButtonSelector, { "state": 'hidden' });
    }

    async reviewDialogExists() {
        return this.page.waitForSelector(dialogSelector, { "state": 'visible' });
    }

    async closeReviewDialog() {
        await this.page.click(closeDialogSelector);
    }

    async getCurrentDay() {
        return this.page.innerText(currentDaySelector);
    }
}