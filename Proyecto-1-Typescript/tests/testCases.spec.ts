import { expect, test } from "@playwright/test";


import Utils from "../commons/Utils";
import TestCasesPage from "../pages/TestCasesPage";
import HomePage from "../pages/HomePage";


let homepage: HomePage;
let testCasesPage: TestCasesPage;
let utils: Utils;


test.beforeEach(async ({ page }) => {
    //Instancias
    homepage = new HomePage(page);
    utils = new Utils(page);
    testCasesPage= new TestCasesPage(page);
  
    //Acciones
    await homepage.visit();
  });





  test("T007-Verificar pagina testCases", async ({ page }) => {
    await testCasesPage.homeTestCaseButton.click();
    await utils.checkURLContains("https://www.automationexercise.com/test_cases");

  });

