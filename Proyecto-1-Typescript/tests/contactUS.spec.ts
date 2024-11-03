import { expect, test } from "@playwright/test";

//POM
import ContactPage from "../pages/ContactPage";
import Utils from "../commons/utils";
import HomePage from "../pages/HomePage";
import exp from "constants";
import { constants } from "buffer";

let homepage: HomePage;
let contactPage: ContactPage;
let utils: Utils;

test.beforeEach(async ({ page }) => {
  //Instancias
  homepage = new HomePage(page);
  contactPage = new ContactPage(page);
  utils = new Utils(page);

  //Acciones
  await homepage.visit();
  await homepage.goToContactUsPage();
});

test("T006-Verificar formulario de contacto ", async ({ page }) => {
    await utils.checkTextIsVisible("Get In Touch", true);
    await contactPage.fillData("Ulises","UsuarioAtenea@gmail.com","Some Subjet", "Holaaaa");
    //subimos el archivo
    await contactPage.uploadFile("data/asuka2.jpg")
    await expect(contactPage.fileUploadInput).toHaveValue(/asuka2\.jpg$/);
    await contactPage.submitForm();
    await utils.checkTextIsVisible("Success! Your details have been submitted successfully.")
    await contactPage.homeButton.click();
    await utils.checkURLContains("https://www.automationexercise.com/");
    
    await page.waitForTimeout(2000);
});
