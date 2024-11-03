import { Locator, Page, expect} from "@playwright/test";
import Utils from "../commons/Utils";


let utils: Utils
//creamos la clase
export default class ProductsPage {
    //Buena practica poner al final del nombre al elemento que hace referencia
    readonly page: Page;
    readonly utils: Utils;
    readonly productResultList:Locator;
    readonly viewProductButton:Locator;
    //creamos constructor
    constructor(page: Page) {
        this.page = page;
        this.productResultList= page.locator(".product-image-wrapper");
        this.viewProductButton=page.locator('a [href^="link:///product_details/1"]');
     

    }

    //visitamos la pagina
    async visit(){
        await this.page.goto("https://www.automationexercise.com/products");
        await this.page.waitForLoadState();
        await utils.checkURLContains("/products");
        
};

    

}