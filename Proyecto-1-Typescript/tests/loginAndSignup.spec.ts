import { test, expect } from "@playwright/test";
import { TIMEOUT } from "dns";

//POM
import HomePage from "../pages/HomePage";
import SignupLoginPage from "../pages/SignupLoginPage";
import SignUpPage from "../pages/signupPage";
import AccountCreatePage from "../pages/AccountCreatePage";
import AccountDeletePage from "../pages/AccountDeletePage";
import Utils from "../commons/utils";

let homepage: HomePage;
let signupLoginPage: SignupLoginPage;
let signUpPage: SignUpPage;
let accountCreatePage: AccountCreatePage;
let accountDeletePage: AccountDeletePage;
let utils: Utils;

//-----------ESCENARIOS DEL 1 AL 5-----------------------

//Codigo que se utilizara antes de cada caso de prueba
test.beforeEach(async ({ page }) => {
  //----------Instancias--------
  homepage = new HomePage(page);
  signupLoginPage = new SignupLoginPage(page);
  signUpPage = new SignUpPage(page);
  accountCreatePage = new AccountCreatePage(page);
  accountDeletePage = new AccountDeletePage(page);
  utils = new Utils(page);

  //---------Acciones--------
  //visitamos pagina
  await homepage.visit();
  //vamos al logins and signup
  await homepage.goToLoginAndSignupPage();
})




test("T001-Registro de Usuario", async ({ page }) => {
  await page.goto("https://www.automationexercise.com/");
  await page.waitForLoadState();
  await expect(page).toHaveTitle("Automation Exercise");
  await homepage.signUpAndLoginButton.click();
  await expect(homepage.signUpHeader).toBeVisible();
  //-------------------Rellenamos priemra parte de la pagina------------------
  await signupLoginPage.signupNameInput.fill("userTest");
  //creamos la funcion numero random para generar un
  //numero random cada vez que creamos un mail asi este no se repite
  const numeroRandom = Math.floor(Math.random() * (999 - 10000) + 10000);
  await signupLoginPage.signupEmailAdressInput.fill(
    "emailusertest" + numeroRandom + "@gmail.com"
  );
  await signupLoginPage.signupButton.click();
  await expect(page.getByText("Enter Account Information")).toBeVisible();
  //------------------1er campo Informacion Cuenta----------------
  await signUpPage.mrCheck.check();
  await signUpPage.passwordInput.fill("12345");
  await signUpPage.daysDropDown.selectOption("1");
  await signUpPage.monthsDropDown.selectOption("7");
  await signUpPage.yearsDropDown.selectOption("2003");
  await signUpPage.newsletterCheck.check();
  await signUpPage.recieveSpecialOffersCheck.check();
  //------------------2do campo Informacion Cuenta-------------
  await signUpPage.firstNameInput.fill("Marcos");
  await signUpPage.lastNameInput.fill("Ojeda");
  await signUpPage.companyNameInput.fill("TestKing");
  await signUpPage.adressInput.fill("1234  main st");
  await signUpPage.adressTwoInput.fill("Apt 537");
  await signUpPage.countryNameInput.selectOption("Canada");
  await signUpPage.stateNameInput.fill("Quebec");
  await signUpPage.cityNameInput.fill("Montreal");
  await signUpPage.zipcodeNameInput.fill("12345");
  await signUpPage.mobileNumberNameInput.fill("1234567890");
  await signUpPage.createAccountButton.click();
  //--------------Despues de ingresar todo los datos verificamos y borramos cuenta-------------
  await utils.checkTextIsVisible("Account Created!");
  await accountCreatePage.continueButton.click();
  await utils.checkTextIsVisible("Logged in as userTest");
  await homepage.deleteAccountButton.click();
  await utils.checkTextIsVisible("Account Deleted!");
  await accountDeletePage.continueButton.click();

  //Tiempo espera de carga
  await page.waitForTimeout(5000);
});

test("T002-Inicio de sesion con credenciales validas", async ({ page }) => {
  //Me logeo con email y password
  await signupLoginPage.login("UsuarioAtenea@gmail.com", "test1234");
  //Verificamos el User Name
  await homepage.checkUserName("usuario");
  await page.waitForTimeout(5000);
});

test("T003-Inicio de sesion con credenciales invalidas", async ({ page }) => {
  //ingreso email y password invalidas
  await signupLoginPage.login(
    "emailinvalido@gmail.com",
    "holacomoestashermano"
  );
  //Verifico mensaje de error
  await utils.checkTextIsVisible("Your email or password is incorrect!");
  await page.waitForTimeout(5000);
});

test("T004-Cierre de Sesion de Usuario", async ({ page }) => {
  //Me logeo con email y password
  await signupLoginPage.login("UsuarioAtenea@gmail.com", "test1234");
  //Me deslogueo
  await homepage.logout();
  //Verificamos URL si es visible
  await page.waitForURL("https://www.automationexercise.com/login", {
    timeout: 2000,
  });
  await utils.checkURLContains("https://www.automationexercise.com/login");

  await page.waitForTimeout(5000);
});

test("T005-Registro de usuario correo electronico ya existente", async ({
  page,
}) => {
  //Registramos usuario existente
  await signupLoginPage.signup("UsuarioAtenea", "UsuarioAtenea@gmail.com");
  await utils.checkTextIsVisible("Email Address already exist!");

  await page.waitForTimeout(5000);
});




















