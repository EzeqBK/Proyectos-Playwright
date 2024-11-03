import { Locator, Page, expect} from "@playwright/test";


//creamos la clase
export default class HomePage {
    //Buena practica poner al final del nombre al elemento que hace referencia
    readonly page: Page;
    readonly signUpAndLoginButton: Locator;
    readonly signUpHeader: Locator;
    readonly deleteAccountButton: Locator;
    readonly logoutButton: Locator
    readonly contactButton: Locator;

    readonly userNameText: Locator;
    readonly productsPageButton: Locator
    //creamos constructor
    constructor(page: Page) {
        this.page = page;
        this.signUpAndLoginButton = page.getByRole("link", {name: "Signup / Login"});
        this.signUpHeader= page.getByRole("heading", { name: "New User Signup!" });
        this.deleteAccountButton= page.getByRole("link", { name: "Delete Account" });
        this.logoutButton=page.getByRole("link", { name: "Logout" });

        this.userNameText=page.getByText("Logged in as", {exact: false});
        this.contactButton= page.getByRole('link', { name: 'Contact us' });
        this.productsPageButton=page.getByRole('link', { name: 'Products' });
    }
    //----------METODOS------------

    //visitamos la pagina
    async visit(){
        await this.page.goto("https://www.automationexercise.com/");
        await this.page.waitForLoadState();
        await expect(this.page).toHaveTitle("Automation Exercise");
    };
    //vamos al inicio sesion y registro
    async goToLoginAndSignupPage (){
        await this.signUpAndLoginButton.click()
    };
    //checamos el username
    async checkUserName(userName: string){
        await expect(this.userNameText).toBeVisible();
        await expect(this.userNameText).toContainText(userName);
    };
    //deslogueamos
    async logout(){
        await this.logoutButton.click();
    }
    //vamos a la pagina de contacto
    async goToContactUsPage(){
        await this.contactButton.click();
    }

}
