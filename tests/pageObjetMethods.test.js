import { expect, test } from '@playwright/test';



test('Getting the title of the page', async ({ page }) => {
    // go to https://practice.cydeo.com/
    await page.goto('https://practice.cydeo.com/');
    // get the title of the page
    let pageTitle = await page.title();
    console.log(pageTitle);
    expect(pageTitle).toBe("Practice");
        

});
test('Getting the current url of the page', async ({ page }) => {
    // go to https://practice.cydeo.com/    
    await page.goto('https://practice.cydeo.com/');
    // get the current url of the page
    let currentURL = await page.url();
    console.log(currentURL);
    expect(currentURL).toBe("https://practice.cydeo.com/");
});

test('Set the window size of the browser', async ({ page }) => {
    // go to https://practice.cydeo.com/
     await page.goto('https://practice.cydeo.com/');
    // set the window size to 1280x720
     await page.setViewportSize({ width: 1900, height: 1080 });
     // wait for 3 seconds to ensure the window size change
     // await page.waitForTimeout(3000);
});