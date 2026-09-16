import { $ } from '@wdio/globals'
import HandleElement from '../utils/handleElementApp.js';

class EquipmentInspection {

    btnEquipmentInnspection = element;
    fieldInputTextA = element;
    fieldInputDatePickerA = element;
    calendarA = element;
    fieldInputSelectA = element;
    dropdownA = element;
    dropdownB = element;
    fieldInputRadioA = element;
    radioA = element;
    radioB = element;
    fieldImageA = element;
    btnSave = element;

    //Need to check element using Appium Inspector
    
    async clickBtnEquipmentInspection() {
        await HandleElement.clickElement(this.btnEquipmentInnspection)
    }

    async fillInputText() {
        await HandleElement.assertElementVisible(this.fieldInputTextA)
        await HandleElement.setText(this.fieldInputTextA, "text")
    }

    async fillInputDatePicker() {
        await HandleElement.assertElementVisible(this.fieldInputDatePickerA)
        await HandleElement.clickElement(this.fieldInputDatePickerA)
        await HandleElement.clickElement(this.calendarA)
    }

    async fillInputSelect() {
        await HandleElement.assertElementVisible(this.fieldInputSelectA)
        await HandleElement.clickElement(this.fieldInputSelectA)
        await HandleElement.clickElement(this.dropdownA)
    }

    async fillInputRadio() {
        await HandleElement.assertElementVisible(this.fieldInputRadioA)
        await HandleElement.clickElement(this.fieldInputSelectA)
        await HandleElement.clickElement(this.radioA)
        await HandleElement.clickElement(this.radioB)
    }

    async fillImagePicker() {
        await HandleElement.assertElementVisible(this.fieldImageA)
    }

    async clickSaveEquipmentInspection() {
        await HandleElement.clickElement(this.btnSave)
    }
}

export default new EquipmentInspection()