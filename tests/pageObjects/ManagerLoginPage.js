

export class ManagerLoginPage {

    constructor(page){
        this.page = page;
        this.managerLogin =this.page.getByRole('button', { name: 'Bank Manager Login' });
       
        
    }

    async managerLoginClick(){
        await this.managerLogin.click();
    }
    async goto(){
        await this.page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    }



      
}
    
