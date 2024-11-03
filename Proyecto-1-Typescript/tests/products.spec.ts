import { expect, test } from "@playwright/test";


import Utils from "../commons/Utils";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";


let homepage: HomePage;
let utils: Utils;
let productsPage: ProductsPage;


test.beforeEach(async ({ page }) => {
    //Instancias
    homepage = new HomePage(page);
    utils = new Utils(page);
    productsPage= new ProductsPage(page);

  
    //Acciones
    await productsPage.visit()

});


//Elementos anidados 
  test("T008-Verificar que todo los productos y la pagina de detalle de productos", async ({ page }) => {

    //buscamos un denominador comun para encontrar todo los elementos
    //le decimos que esta linea devuelva mas de 0
    expect((await productsPage.productResultList.all()).length).toBeGreaterThan(0)
    //buscamos el primer elemento
    await productsPage.productResultList.first().locator('a [href^="link:///product_details/1"]').click();

    await page.waitForTimeout(5000);
  });