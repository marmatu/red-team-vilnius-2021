const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage')
const { WeekDayPage } = require('../pages/weekDayPage')

const USERNAME = "admin3@sourceryacademy.com";
const PASSWORD = "nera svarbus55";

let loginPage, weekDayPage;

test.describe(`Lunch app e2e tests`, () => {
  let page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    weekDayPage = new WeekDayPage(page);
  });
  test.beforeEach(async () => {
    await loginPage.goto();
  });

  test(`Login successful`, async () => {
    await loginPage.enterCredentials(USERNAME, PASSWORD);
    await loginPage.loginButtonClick();
  });
});