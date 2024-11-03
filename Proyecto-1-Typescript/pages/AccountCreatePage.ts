import { Locator, Page } from "playwright";

//creamos la clase
export default class accountCreatePage {
    readonly page: Page;
    readonly continueButton: Locator;
    //creamos constructor
    constructor(page: Page) {
        this.page = page;
        this.continueButton= page.getByRole("link", { name: "Continue" });


    }
}