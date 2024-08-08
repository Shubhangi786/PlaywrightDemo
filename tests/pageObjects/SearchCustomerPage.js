

class SearchCustomerPage {

    constructor(page){
        this.page = page;
        this.customerBtn = this.page.getByRole('button', { name: 'Customers' });
        this.searchCustomerInput = this.page.getByPlaceholder('Search Customer');
        this.searchResults = this.page.locator('//table//tr[contains(@ng-repeat,\'cust\')]//td[1]');
    }

    async goToCustomers(){
        await this.customerBtn.click();
    }

    async searchCustomer(searchValue){
        await this.searchCustomerInput.click();
        await this.searchCustomerInput.fill(searchValue);
    }

}
module.exports = { SearchCustomerPage };