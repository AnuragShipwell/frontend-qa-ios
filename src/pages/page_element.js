import faker from "faker";
import debugApp from "../utils/logger";

class PageElement {
  constructor(driver, selector, elementObject = null) {
    this.driver = driver;
    this.selector = selector;
    this.elementObject = elementObject;
  }

  _log(action, custom = null) {
    let message = `${action} - ${this.selector}`;
    if (custom) message += `==> ${custom}`;
    debugApp(` ${this.constructor.name}: ${message}`);
  }

  async getWebElement() {
    if (!this.elementObject) {
      this._log("getWebElement");
      const element = await this.driver.$(this.selector);
      await element.waitForExist();
      this.elementObject = element;
    }
    return this.elementObject;
  }

  async waitForVisible(ms = 5000) {
    this._log("waitForVisible");
    await this.waitForDisplayed(ms);
  }

  async waitForDisplayed(ms = 5000) {
    this._log("waitForDisplayed");
    const element = await this.driver.$(this.selector);
    await element.waitForDisplayed({ timeout: ms });
  }

  async waitForNotDisplayed(ms = 5000) {
    this._log("waitForNotDisplayed");
    const element = await this.driver.$(this.selector);
    await element.waitForDisplayed({ timeout: ms, reverse: true });
  }

  async waitForNotVisible(ms = 5000) {
    await this.waitForNotDisplayed(ms);
  }

  async waitForEnabled(ms = 5000) {
    this._log("waitForEnabled");
    const element = await this.getWebElement();
    await element.waitForEnabled(ms);
  }

  async click(enableCheck = true) {
    this._log("click");
    const element = await this.getWebElement();
    if (enableCheck) await element.waitForEnabled();
    await element.click();
  }

  async clickAtPosition(options = {}) {
    this._log("clickAtPosition", `Options:${options}`);
    console.log(`clickAtPosition:`);
    console.log(options);
    const element = await this.getWebElement();
    await element.waitForEnabled();
    await element.click(options);
  }

  async getText() {
    this._log("getText");
    const element = await this.getWebElement();
    return await element.getText();
  }

  async setValue(value) {
    this._log("setValue", value);
    const element = await this.getWebElement();
    await element.waitForDisplayed();
    await element.setValue(value);
  }

  async addValue(value) {
    this._log("addValue", value);
    const element = await this.getWebElement();
    await element.waitForDisplayed();
    await element.addValue(value);
  }

  async getValue() {
    this._log("getValue");
    const element = await this.getWebElement();
    return await element.getValue();
  }

  async getAttribute(attributeName) {
    this._log("getAttribute", attributeName);
    const element = await this.getWebElement();
    return await element.getAttribute(attributeName);
  }

  async isVisible() {
    this._log("isVisible");
    return await this.isDisplayed();
  }

  async isDisplayed() {
    this._log("isDisplayed");
    let eleDisplayed;
    try {
      const element = await this.driver.$(this.selector);
      eleDisplayed = await element.isDisplayed();
    } catch (error) {
      const errMessage = error.message;
      if (
        errMessage.includes("stale element reference") ||
        errMessage.includes("no such element")
      ) {
        eleDisplayed = false;
      } else {
        throw error;
      }
    }
    this._log("isDisplayed", `isDisplayed=${eleDisplayed}`);
    return eleDisplayed;
  }

  async isEnabled() {
    this._log("isEnabled");
    const element = await this.driver.$(this.selector);
    return await element.isEnabled();
  }

  async isSelected() {
    this._log("isSelected");
    const element = await this.driver.$(this.selector);
    return await element.isSelected();
  }

  async doubleClick() {
    this._log("doubleClick");
    const element = await this.driver.$(this.selector);
    await element.doubleClick();
  }

  async hover() {
    this._log("hover");
    await this.moveTo();
  }

  async moveTo() {
    this._log("moveTo");
    const element = await this.getWebElement();
    await element.scrollIntoView();
    await element.moveTo();
  }

  async getScreenShot(suffixFileName) {
    this._log("getScreenShot");
    const element = await this.getWebElement();
    let fileName = suffixFileName
      ? suffixFileName
      : faker.fake("{{system.fileName}}").split(".")[0];
    fileName += `_${Date.now()}.png`;
    const snapFilePath = `./screenshots/${fileName}`;
    await element.saveScreenshot(snapFilePath);
    return snapFilePath;
  }

  async saveScreenshot(fileName) {
    this._log("saveScreenshot", `FILE: ${fileName}`);
    const element = await this.getWebElement();
    await element.saveScreenshot(fileName);
  }

  async element(selector) {
    this._log("sub elements", `parent: ${this.selector}, sub: ${selector}`);
    const parentElement = await this.getWebElement();
    return await parentElement.$(selector);
  }

  async elements(selector) {
    this._log("sub elements", `parent: ${this.selector}, sub: ${selector}`);
    const parentElement = await this.getWebElement();
    return await parentElement.$$(selector);
  }

  async scrollIntoView() {
    this._log("scrollIntoView");
    const element = await this.getWebElement();
    await element.scrollIntoView();
  }

  async clearValue() {
    this._log("clearValue");
    const element = await this.getWebElement();
    await element.clearValue();
  }

  async jsClick() {
    this._log("jsClick");
    const webElement = await this.getWebElement();
    await this.driver.execute(ele => ele.click(), webElement);
  }

  async getElementRect() {
    this._log("getElementRect");
    const webElement = await this.getWebElement();
    return await this.driver.execute(
      ele => ele.getBoundingClientRect(),
      webElement
    );
  }
}

export default PageElement;