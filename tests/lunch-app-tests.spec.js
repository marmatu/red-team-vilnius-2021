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
    await loginPage.goto();
    await loginPage.enterCredentials(USERNAME, PASSWORD);
    await loginPage.loginButtonClick();
  });
  test.beforeEach(async () => {
    await weekDayPage.goto();
    await closeReviewDialog();
  });

  test(`Login successful`, async () => {
    expect(await weekDayPage.logoutButtonExists()).toBe(true);
  });

  test(`Open day is current day`, async () => {
    const currentWeekDayInLithuanian = await weekDayPage.getCurrentDay();
    expect(translateDayNameFromLithuanianToEnglish(currentWeekDayInLithuanian)).toBe(getCurrentWeekDay());
  });

  test(`By default the current day URL is opened`, async () => {
    const currentURL = await page.url();
    const currentWeekDayInLithuanian = await weekDayPage.getCurrentDay();
    expect(currentURL).toContain(translateDayNameFromLithuanianToEnglish(currentWeekDayInLithuanian).toLowerCase());
  });
});

async function closeReviewDialog() {
  if (await weekDayPage.reviewDialogExists()) {
    await weekDayPage.closeReviewDialog();
  }
}

function getCurrentWeekDay() {
  const weekDaysInEnglish = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return weekDaysInEnglish[new Date().getDay()]; // new Date() object returns current date by default;;
}

function translateDayNameFromLithuanianToEnglish(dayInLithuanian) {
  switch (dayInLithuanian) {
    case "Pirmadienis":
      return "Monday";
    case "Antradienis":
      return "Tuesday";
    case "Trečiadienis":
      return "Wednesday";
    case "Ketvirtadienis":
      return "Thursday";
    case "Penktadienis":
      return "Friday";
    case "Šeštadienis":
      return "Saturday";
    case "Sekmadienis":
      return "Sunday";
    default:
      return "Incorrect Lithuanian week day received";
  }
}