import { test } from '@playwright/test';

test('Youtube test', async ({ page }) => {
    await page.goto('https://www.youtube.com/');
    // await page.waitForTimeout(3000);
    let searchBox = page.locator("//input[@id = 'search']");
    await searchBox.pressSequentially('Knocked Loose');
    let searchButton = page.locator("//button[@id = 'search-icon-legacy']");
    await searchButton.click();
    // await page.waitForTimeout(3000);
    let video = page.locator("(//yt-formatted-string[contains(@aria-label, 'Knocked Loose')])[2]");
    await video.click();
    // await page.waitForTimeout(10000);



});
