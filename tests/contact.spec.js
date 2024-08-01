const { test, expect } = require('@playwright/test');
const exp = require('constants');


test('Verify contact-us success message', async({page}) => {

    page.setViewportSize({ width: 1600, height: 1200 });
    await page.goto('https://ultimateqa.com/');
    
    const aboutLink = page.getByRole('link', {name : 'Contact Us'});
    await aboutLink.click();

    const message = page.locator('//h2/span').getByText('UltimateQA');

    await message.dblclick();

    await message.press('Control+C')

    const nameInput =page.locator('#et_pb_contact_name_0');
    await nameInput.press('Control+V');

    //Check that copied content placed in Name field
    expect(nameInput).toHaveValue('UltimateQA');

    const emailInput= page.locator('#et_pb_contact_email_0');
    await emailInput.click();
    await page.keyboard.type('TestfortheDemo@testing.com',{ delay: 200 });
    expect(emailInput).toHaveValue('TestfortheDemo@testing.com');

    

    const msgInput = page.getByPlaceholder('Message');
    await msgInput.click();
    await page.keyboard.type("Testing message for demo training",{ delay: 100 });
    // await msgInput.fill("Testing message for demo training");


    await page.getByRole('button',{name : 'Submit'}).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button',{name : 'Submit'}).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button',{name : 'Submit'}).click();

    const successMsg = page.locator('css=.et-pb-contact-message>p');
    await expect(successMsg).toHaveText('Thank you for contacting us. We will get back to you soon!');
});

