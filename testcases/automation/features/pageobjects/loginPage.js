import { $ } from "@wdio/globals";
import HandleElement from "../utils/handleElementApp.js";

class LoginPage {

  fieldUsername = element;
  fieldPassword = element;
  buttonLogin = element;

  //Need to check element using Appium Inspector

  async fillUsername(username) {
    await HandleElement.setText(this.fieldUsername, username)
  }

  async fillPassword(password) {
    await HandleElement.setText(this.fieldPassword, password)
  }

  async clickLogin(username, password) {
    await HandleElement.setText(this.fieldUsername, username)
    await HandleElement.setText(this.fieldPassword, password)
    await HandleElement.clickElement(this.buttonLogin);
  }

}

export default new LoginPage();
