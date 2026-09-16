import { $ } from "@wdio/globals";
import HandleElement from "../utils/handleElement.js";

class HazardMenu {

  fieldLocation = element;
  locationA = element;
  fieldSublocation = element;
  sublocationA = element;
  fieldArea = element;
  areaA = element;
  fieldAreaDescription = element;
  fieldEvidence = element;
  fieldPIC = element;
  picA = element;
  picB = element;
  fieldResolutionDate = element;
  calendarA = element;
  btnCoobserverPlus = element;
  fieldCoobserverA = element;
  coobserverA = element;
  btnSaveHazard = element;

  //Need to check element using Appium Inspector

  async fillLocation() {
      await HandleElement.assertElementVisible(this.fieldLocation)
      await HandleElement.clickElement(this.fieldLocation)
      await HandleElement.clickElement(this.locationA)
  }

  async fillSublocation() {
      await HandleElement.assertElementVisible(this.fieldSublocation)
      await HandleElement.clickElement(this.fieldSublocation)
      await HandleElement.clickElement(this.sublocationA)
  }

  async fillArea() {
      await HandleElement.assertElementVisible(this.fieldArea)
      await HandleElement.clickElement(this.fieldArea)
      await HandleElement.clickElement(this.areaA)
  }

  async fillEvidence() {
      await HandleElement.assertElementVisible(this.fieldEvidence)
  }

  async fillPic() {
      await HandleElement.assertTextVisible("reporter")
      await HandleElement.assertElementVisible(this.fieldPIC)
      await HandleElement.clickElement(this.fieldPIC)
      await HandleElement.clickElement(this.picB)
  }

  async fillAreaDescription() {
      await HandleElement.assertElementVisible(this.fieldAreaDescription)
      await HandleElement.setText(this.fieldAreaDescription, "text")
  }
  
  async fillInputResolutionDate() {
      await HandleElement.assertElementVisible(this.fieldResolutionDate)
      await HandleElement.clickElement(this.fieldResolutionDate)
      await HandleElement.clickElement(this.calendarA)
  }
  
  async fillCoObserver() {
      await HandleElement.assertElementVisible(this.btnCoobserverPlus)
      await HandleElement.clickElement(this.btnCoobserverPlus)
      await HandleElement.assertElementVisible(this.fieldCoobserverA)
      await HandleElement.clickElement(this.fieldCoobserverA)
      await HandleElement.clickElement(this.coobserverA)
  }

  async btnSave() {
      await HandleElement.clickElement(this.btnSaveHazard)
  }
}

export default new HazardMenu();
