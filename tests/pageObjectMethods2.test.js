import { test, expect } from '@playwright/test';

test.describe("@smoke Test group 1", () => {
    test.beforeEach(async({page}) => {
    await page.goto('https://practice.cydeo.com/');
    });
    test.afterEach(async({page}) => {
        // wait for 2 seconds
       //  await page.waitForTimeout(2000);  
    });

    test("Return page title", async ({ page }) => {
    let pageTitle = await page.title();
    console.log(pageTitle);
    expect(pageTitle).toBe("Practice");
    });

    test("Return URL", async ({ page }) => {
    let currentURL = await page.url();
    console.log(currentURL);
    expect(currentURL).toBe("https://practice.cydeo.com/");
    });

    test("Set window size", async ({ page }) => {
    await page.setViewportSize({ width: 1900, height: 1080 });
    });
});