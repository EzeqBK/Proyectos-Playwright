import { Locator, Page, expect } from "@playwright/test";

//Esta clase sirve para cosas utiles, como tener metodos que
//verifiquen ciertos "carteles" o cosas asi
//la idea es que todas las acciones que pongamos aca no dependan de ninguna page

//creamos la clase
export default class utils {
  readonly page: Page;
  readonly isTextExact: boolean; 

  //creamos constructor
  constructor(page: Page) {
    this.page = page;
    this.isTextExact = false;
  }
  //verificamos que el texto es visible y tambien se fija si es exactamente como lo ponemos
  async checkTextIsVisible(text: string, exacto=this.isTextExact) {
    await expect(this.page.getByText(text,{exact: exacto} ).first()).toBeVisible();
  }
  //verificamos que la URL este en la pagina
  async checkURLContains(text: string) {
    expect(this.page.url()).toContain(text);
  }
}
