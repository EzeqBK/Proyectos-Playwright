import { Locator, Page , expect} from "@playwright/test";

//creamos la clase
export default class SignupLoginPage {
    //Buena practica poner al final del nombre al elemento que hace referencia
    readonly page: Page;   
    //-------------Login----------
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly loginHeader:   Locator;

    //-----------Signup-------------
    readonly signupNameInput: Locator;
    readonly signupEmailAdressInput: Locator;
    readonly signupButton: Locator;
    //creamos constructor
    constructor(page: Page) {
        this.page = page;
        //-------------Login----------
        this.emailInput= page.locator("form").filter({ hasText: "Login" }).getByPlaceholder("Email Address");
        this.passwordInput= page.getByPlaceholder("Password");
        this.loginButton= page.getByRole("button", { name: "Login" });
        this.loginHeader= page.getByRole("heading", { name: "Login to your account" });

        //-----------Signup-------------
        this.signupNameInput = page.getByPlaceholder("Name");
        this.signupEmailAdressInput=page.locator("form").filter({ hasText: "Signup" }).getByPlaceholder("Email Address");
        this.signupButton=page.getByRole("button", { name: "Signup" });
    }

    async login(userEmail: string, userPassword: string){
        await expect(this.loginHeader).toBeVisible();
        await this.emailInput.fill(userEmail);
        await this.passwordInput.fill(userPassword);
        await this.loginButton.click();
    }

    async signup(userName:string, userEmail:string){
        await this.signupNameInput.fill(userName);
        await this.signupEmailAdressInput.fill(userEmail);
        await this.signupButton.click();
    }





}