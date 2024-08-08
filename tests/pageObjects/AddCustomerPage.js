
export class AddCustomerPage {

    constructor(page) {
      this.page = page;
      this.firstName = this.page.getByPlaceholder('First Name');
      this.lastName = this.page.getByPlaceholder('Last Name');
      this.postalCode = this.page.getByPlaceholder('Post Code');
      this.submit = this.page.getByRole('form').getByRole('button', { name: 'Add Customer' });
      this.addCustomerBtn = this.page.getByRole('button', { name: 'Add Customer' });

    }

    async goToAddCustomer(){
      await this.addCustomerBtn.click();
    }
  
    async addCustomer(firstname, lastname, postalcode) {
      await this.firstName.click();
      await this.firstName.fill(firstname);
      await this.firstName.press('Tab');
      await this.lastName.fill(lastname);
      await this.lastName.press('Tab');
      await this.postalCode.fill(postalcode);
      await this.postalCode.press('Tab');
      await this.submit.press('Enter');
      await this.page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
      });
    }
  }
  
