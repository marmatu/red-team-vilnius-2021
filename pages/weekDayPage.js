const baseUrl = "https://lunch.devbstaging.com";
const logoutButtonSelector = "div.v-list:nth-child(5) > div:nth-child(2) > a:nth-child(1) > div:nth-child(2) > div:nth-child(1)";

exports.WeekDayPage = class WeekDayPage {

    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(baseUrl);
    }
}