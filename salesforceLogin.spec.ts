import { test } from "@playwright/test";
test(`To login into the salesforce application`, async ({page}) => {
    const URL=`https://login.salesforce.com/?locale=in`;
    const username =`ravindran.ramdas@testleaf.com`;
    const password=`RaviSalesTest#1432`;
    const loginUserNameLocator = `#username`;
    const loginPasswordLocator = `#password`;
    const loginBtnLocator=`#Login`;

    await page.goto(`${URL}`);
    await page.locator(`${loginUserNameLocator}`).fill(`${username}`);
    await page.locator(`${loginPasswordLocator}`).fill(`${password}`);
    await page.locator(`${loginBtnLocator}`).click();
    console.log("User Successfully logged in");
    const loggedinURL = page.url();
    console.log(loggedinURL);
})