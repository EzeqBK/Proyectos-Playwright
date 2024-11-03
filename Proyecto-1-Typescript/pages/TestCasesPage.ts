import { Locator, Page, expect} from "@playwright/test";



//creamos la clase
export default class TestCasesPage {
    //Buena practica poner al final del nombre al elemento que hace referencia
    readonly page: Page;
    readonly homeTestCaseButton: Locator;
    

    //creamos constructor
    constructor(page: Page) {
        this.page = page;
        this.homeTestCaseButton=page.getByRole('link', { name: 'Test Cases' }).first();
    }


}