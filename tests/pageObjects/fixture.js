const { test : base , expect} = require('@playwright/test');
const { AddCustomerPage } = require('./AddCustomerPage.js');
const { OpenAccountPage } = require('./OpenAccountPage.js');
const { SearchCustomerPage }= require('./SearchCustomerPage.js');
const { ManagerLoginPage } = require('./ManagerLoginPage.js');


const test = base.extend({

  customer: async ({}, use) => {
    // Read the JSON data from the file 
    const customerData = require('./customer.json');
    // Use the fixture value in the test.
    await use(customerData);
  },
  page1 : (async ({}, use) => {
    const {page} = require('../HomeTask_5_Fixtures.spec.js');
    await use(page);
  }),
  managerLoginPage: async ({page1}, use)=>{
    const managerLoginPage = new ManagerLoginPage(page1);
    await managerLoginPage.goto();
    await managerLoginPage.managerLoginClick();
    await use(managerLoginPage);
  },
  addCustomerPage : async ({managerLoginPage}, use) => {
    const { page } = managerLoginPage;
    const addCustomerPage = new AddCustomerPage(page);
    await use(addCustomerPage);
  },
  openAccountPage : async ({managerLoginPage}, use) => {
    const {page} = managerLoginPage;
    const openAccountPage = new OpenAccountPage(page);
    await use(openAccountPage);
  },
  searchCustomerPage : async ({managerLoginPage}, use) => {
    const {page} = managerLoginPage;
    const searchCustomerPage = new SearchCustomerPage(page);
    await use(searchCustomerPage);
  },
});

module.exports = {test, expect};


