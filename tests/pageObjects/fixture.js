import { test as base} from '@playwright/test';
import {ManagerLoginPage} from './ManagerLoginPage.js';
import { AddCustomerPage } from './AddCustomerPage.js';
import { OpenAccountPage } from './OpenAccountPage.js';
import { page } from '../HomeTask_5_Fixtures.spec.js'
import { SearchCustomerPage } from './SearchCustomerPage.js';


 export const test = base.extend({
  
  customer: async ({}, use) => {
    // Read the JSON data from the file 
    const customerData = require('./customer.json');
    // Use the fixture value in the test.
    await use(customerData);
  },

  page: async({}, use)=>{
    await use(page);
  },

  managerLoginPage: async ({}, use)=>{
    const managerLoginPage = new ManagerLoginPage(page);
    await managerLoginPage.goto();
    await managerLoginPage.managerLoginClick();
    await use(managerLoginPage);
    
  },
  addCustomerPage : async ({managerLoginPage}, use) => {
    const {page} = managerLoginPage;
    const addCustomerPage = new AddCustomerPage(page);
    // Use the fixture value in the test.
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

export {expect} from '@playwright/test';

