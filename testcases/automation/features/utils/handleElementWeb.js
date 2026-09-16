import { $ } from "@wdio/globals";

class HandleElement {
  // Made to handle basic functions that will be used repeatedly

  // Usually click element needs wait for when the browser not loaded yet but the framework sometimes detect it already loaded
  async clickElement(element) {
    await browser.pause(1000);
    try {
        await element.waitForClickable({ timeout: 5000 });
    } catch (error) {
        await element.scrollIntoView({ block: 'center' });
    }
    await element.click();
    await browser.pause(1000);
  }

  async setText(element, value) {
    this.clickElement(element)
    await element.setValue(value)
  }

  // For assertions since every page landing will need text assertion and element assertion usually
  async assertTextVisible(text) {
    await browser.pause(1000);
    try {
      await expect($(`//*[normalize-space(text())="${text}"]`)).toBeDisplayed({ timeout: 3000 });
    } catch (error) {
      await expect($(`//*[contains(normalize-space(text()),"${text}")]`)).toBeDisplayed({ timeout: 5000 });
      throw error;
    }
    await browser.pause(1000);
  }

  async assertElementVisible(xpath) {
    await expect($(`${xpath}`)).toBeDisplayed();
  }

}
export default new HandleElement();
