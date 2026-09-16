import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";

import HandleElement from "../utils/handleElementApp.js";
import HomePage from "../pageobjects/homePage.js";
import LoginPage from "../pageobjects/loginPage.js";
import EquipmentInspection from "../pageobjects/equipmentInspection.js";
import HazardMenu from "../pageobjects/hazardMenu.js";

const pages = { home: HomePage, LoginPage: LoginPage, EquipmentInspection: EquipmentInspection, HazardMenu: HazardMenu};

let resultCount
let resultCategorySum

Given('User is on mobile app wemine', async () => {
  await $('~home-screen').waitForDisplayed({ timeout: 10000 })
});

Given('User proceed login', async () => {
  await LoginPage.clickLogin("username", "password")
});

When('User inputs username', async () => {
  await LoginPage.fillUsername("username")
});

When('User inputs password', async () => {
  await LoginPage.fillPassword("password")
});

When('User open feature equipment inspection', async () => {
  await EquipmentInspection.clickBtnEquipmentInspection();
});

When('User can see list of previous submissions', async () => {
  // need element of table or list on the page
});

When('User can click button to open submission form', async () => {
  // probably if there is a button or element like opening equipment inspection
});

When('User open menu safety hazard', async () => {
  // need to open hazard menu on pageobject main menu to be more structured
});

When('User can fill safety hazard form and submit', async () => {
  await HazardMenu.fillLocation()
  await HazardMenu.fillSublocation()
  await HazardMenu.fillArea()
  await HazardMenu.fillEvidence()
  await HazardMenu.fillPic()
  await HazardMenu.btnSave()
});

Then('User can change fill submission form', async () => {
// if need to change form code on equipment inspection form
});

Then('User can restart', async () => {
// restarting app
});

Then('User can open their account', async () => {
  await LoginPage.clickLogin("username", "password")
});

Then('User can submit submission form', async () => {
  await EquipmentInspection.btnEquipmentInnspection()
});

Then('User will get notification to follow up task', async () => {
 // need to check element email or assert email notification BE service
});

Then('User can fill follow up task form and submit', async () => {
  await HazardMenu.fillEvidence()
  await HazardMenu.fillInputResolutionDate()
  await HazardMenu.btnSaveHazard()
});
