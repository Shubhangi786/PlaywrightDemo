
const {test, expect} = require('./pageObjects/fixture');

test.beforeAll('Testing', async({browser})=>{
  const context = await browser.newContext();
  module.exports.page = await context.newPage();
});

test.describe('test', ()=>{

  test('Add customer', async({addCustomerPage, customer})=>{
    await addCustomerPage.goToAddCustomer();
    await addCustomerPage.addCustomer(customer.firstName,customer.lastName,customer.postCode);
  });
  
  test('Open account', async ({openAccountPage, customer})=>{
    const userName = customer.firstName.concat(" ", customer.lastName);
    await openAccountPage.goToOpenAccount();
    await openAccountPage.openAccount(userName, 'Dollar');
  });

  test('Search customer on Customers page', async({searchCustomerPage, customer})=>{
    await searchCustomerPage.goToCustomers();
    await searchCustomerPage.searchCustomer(customer.firstName);
    await expect(searchCustomerPage.searchResults).toContainText(customer.firstName);
  });
})

test.afterAll('Closing browser', async({page1})=>{
  await page1.close();
});


  









  // test('test',async ({}) => {
  //   const managerLoginPage = new ManagerLoginPage(page);
  //   await managerLoginPage.managerLoginClick();
  //   const addCustomerPage = new AddCustomerPage(page);
  //   await addCustomerPage.goto();
  //   await addCustomerPage.addCustomer(customer.firstName, customer.lastName, customer.postCode);

  // });