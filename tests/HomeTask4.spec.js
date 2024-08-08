const { test, expect, chromium } = require ('@playwright/test');

test.describe.configure({ mode: 'parallel' });


test('Verify Withdraw error message.', async ({}) => {

    const browser = await chromium.launch();
    const customerContext = await browser.newContext({
      recordVideo: { dir: '../videos/' } ,
      size: { width: 680, height: 480 }
    });
    const page = await customerContext.newPage();
    await page.setViewportSize({ width: 1600, height: 1200 });
    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    await page.getByRole('button', { name: 'Customer Login' }).click();
    await page.locator('#userSelect').selectOption('1');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('button', { name: 'Transactions' }).click();
    await page.getByRole('button', { name: 'Reset' }).click();
    await page.getByRole('button', { name: 'Back' }).click();
    await page.getByRole('button', { name: 'Withdrawl' }).click();
    await page.getByPlaceholder('amount').click();
    await page.getByPlaceholder('amount').fill('50000');
    await page.getByRole('button', { name: 'Withdraw', exact: true }).click();
    await expect(page.locator('body')).toContainText('Transaction Failed. You can not withdraw amount more than the balance.');
   
    //Full page screenshot
    await page.screenshot({ path: '../WithdrawErrorFullPageScreenshot.png', fullPage: true });
  
    await page.getByRole('button', { name: 'Logout' }).click();
  
    await page.close();
    await customerContext.close();
  });

test('Add deposit to the account ', async ({}) => {
    const browser = await chromium.launch();
    const depositContext = await browser.newContext();
    const page = await depositContext.newPage();
    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    await page.getByRole('button', { name: 'Customer Login' }).click();
    await page.locator('#userSelect').selectOption('2');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('button', { name: 'Deposit' }).click();
    await page.getByPlaceholder('amount').click();
    await page.getByPlaceholder('amount').fill('3000');
    await page.getByRole('form').getByRole('button', { name: 'Deposit' }).click();
    await expect(page.locator('body')).toContainText('3000');
    await page.close();
    await depositContext.close();
  });

