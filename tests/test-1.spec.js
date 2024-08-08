const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  page.setViewportSize({ width: 1600, height: 1200 });
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('Playwright');
  await page.goto('https://playwright.dev/');
});