import touchAction from "webdriverio/build/commands/browser/touchAction";

class LanguagePage{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
async languageViewText(){
    return await this.element('~Select the language you want to use')
}
async languageViewLanguageInput(){
    return await this.element('-ios class chain:**/XCUIElementTypeTextField[`value == \"--\"`]')
}
async allowButton(){
    return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Allow\"`]')
}
async languageViewEnglishButton(){
    return await this.element('-ios class chain:**/XCUIElementTypeWindow/XCUIElementTypeOther[3]/XCUIElementTypeOther[2]/XCUIElementTypeTable/XCUIElementTypeCell[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther')
}
async languageViewEspanolButton(){
    return await this.element('-ios class chain:**/XCUIElementTypeWindow/XCUIElementTypeOther[3]/XCUIElementTypeOther[2]/XCUIElementTypeTable/XCUIElementTypeCell[3]/XCUIElementTypeOther[1]/XCUIElementTypeOther')
}
async languageViewDoneButton(){
    return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Done\"`]')
}
async languageViewInputBoxEnglish(){
    return await this.element('-ios class chain:**/XCUIElementTypeTextField[`value == \"English\"`]')
}
async languageViewSaveButton(){
    return await this.element('~sendVerification')
}
async languageSelectionFlow(){
    const languageViewLanguageInput= await this.languageViewLanguageInput()
    const languageViewEspanolButton= await this.languageViewEspanolButton()
    const languageViewEnglishButton= await this.languageViewEnglishButton()
    const languageViewDoneButton= await this.languageViewDoneButton()
    const languageViewInputBoxEnglish= await this.languageViewInputBoxEnglish()
    const languageViewSaveButton= await this.languageViewSaveButton()
    const languageViewText= await this.languageViewText()
    const allowButton= await this.allowButton()

    await this.driver.pause(5000)
    if (await allowButton.isDisplayed()){
        await allowButton.touchAction('tap')

    }
    await this.driver.pause(5000)
    await app.driver.getPageSource()
    await languageViewText.waitForExist({ timeout: 10000, timeoutMsg: "Not Displayed" })
    await languageViewText.waitForDisplayed({ timeout: 10000 })

    await languageViewLanguageInput.waitForExist({ timeout: 10000, timeoutMsg: "Not Displayed" })
    await languageViewLanguageInput.waitForDisplayed({ timeout: 10000 })
    await languageViewLanguageInput.touchAction('tap')
    
    await languageViewEspanolButton.waitForDisplayed({ timeout: 10000 })
    await languageViewEnglishButton.waitForDisplayed({ timeout: 10000 })
    await languageViewEnglishButton.touchAction('tap')
    await languageViewDoneButton.waitForDisplayed({ timeout: 10000 })
    await languageViewDoneButton.touchAction('tap')

    await languageViewInputBoxEnglish.waitForDisplayed({ timeout: 10000 })
    
    await languageViewSaveButton.waitForDisplayed({ timeout: 10000 })
    await languageViewSaveButton.touchAction('tap')
}

}

export default LanguagePage;