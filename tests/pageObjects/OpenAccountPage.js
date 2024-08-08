
class OpenAccountPage{
    constructor(page){
        this.page =page;
        this.openAccountBtn = this.page.getByRole('button', { name: 'Open Account' });
        this.userName = this.page.locator('#userSelect');
        this.currency = this.page.locator('#currency');
        this.processBtn = this.page.getByRole('button', { name: 'Process' });
    }

    async goToOpenAccount(){
        await this.openAccountBtn.click();
    }

    async selectCurrency(currencyValue){
        await this.currency.selectOption(currencyValue);
    }

    async selectUser(username){
        await this.userName.selectOption(username);
    }

    async openAccount(userName, currency){
        await this.openAccountBtn.click();
        await this.selectUser(userName);
        await this.selectCurrency(currency);
        await this.processBtn.click();

        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
          });
    }
}

module.exports={OpenAccountPage};