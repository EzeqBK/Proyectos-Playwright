import { Locator, Page } from "playwright";

//creamos la clase
export default class SignUpPage {
  //Buena practica poner al final del nombre al elemento que hace referencia
  readonly page: Page;
  //------------------1er campo Informacion Cuenta----------------
  readonly mrCheck: Locator;
  readonly passwordInput: Locator;
  readonly daysDropDown: Locator;
  readonly monthsDropDown: Locator;
  readonly yearsDropDown: Locator;
  readonly newsletterCheck: Locator;
  readonly recieveSpecialOffersCheck: Locator;
  //------------------2do campo Informacion Cuenta-------------
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly companyNameInput: Locator;
  readonly adressInput: Locator;
  readonly adressTwoInput: Locator;
  readonly countryNameInput: Locator;
  readonly stateNameInput: Locator;
  readonly cityNameInput: Locator;
  readonly zipcodeNameInput: Locator;
  readonly mobileNumberNameInput: Locator;
  readonly createAccountButton: Locator;


  //creamos constructor
  constructor(page: Page) {
    this.page = page;
    //------------------1er campo Informacion Cuenta----------------
    this.mrCheck = page.getByLabel("Mr.");
    this.passwordInput= page.getByLabel('Password')
    this.daysDropDown = page.locator("#days");
    this.monthsDropDown = page.locator("#months");
    this.yearsDropDown = page.locator("#years");
    this.newsletterCheck = page.getByLabel("Sign up for our newsletter!");
    this.recieveSpecialOffersCheck = page.getByLabel("Receive special offers from");
    //------------------2do campo Informacion Cuenta-------------
    this.firstNameInput = page.getByLabel("First name");
    this.lastNameInput = page.getByLabel("Last name");
    this.companyNameInput = page.getByLabel("Company", { exact: true });
    this.adressInput = page.getByLabel("Address * (Street address, P.");
    this.adressTwoInput = page.getByLabel("Address 2");
    this.countryNameInput = page.getByLabel("Country");
    this.stateNameInput = page.getByLabel("State");
    this.cityNameInput = page.getByLabel("City");
    this.zipcodeNameInput = page.locator("#zipcode");
    this.mobileNumberNameInput = page.getByLabel("Mobile Number");
    this.createAccountButton = page.getByRole("button", {name: "Create Account",});

  }
}
