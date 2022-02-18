class LanguagePage{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
async languageViewLanguageInput(){
    return await this.element('-ios class chain:**/XCUIElementTypeTextField[`value == \"--\"`]')
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
    await this.driver.pause(20000)
    const languageViewLanguageInput= await this.languageViewLanguageInput()
    const languageViewEspanolButton= await this.languageViewEspanolButton()
    const languageViewEnglishButton= await this.languageViewEnglishButton()
    const languageViewDoneButton= await this.languageViewDoneButton()
    const languageViewInputBoxEnglish= await this.languageViewInputBoxEnglish()
    const languageViewSaveButton= await this.languageViewSaveButton()

    await languageViewLanguageInput.waitForEnabled({ timeout: 10000 })
    await languageViewLanguageInput.touchAction('tap')
    
    await languageViewEspanolButton.waitForDisplayed({ timeout: 10000 })
    await languageViewEnglishButton.waitForEnabled({ timeout: 10000 })
    await languageViewEnglishButton.touchAction('tap')
    await languageViewDoneButton.waitForEnabled({ timeout: 10000 })
    await languageViewDoneButton.touchAction('tap')

    await languageViewInputBoxEnglish.waitForDisplayed({ timeout: 10000 })
    
    await languageViewSaveButton.waitForEnabled({ timeout: 10000 })
    await languageViewSaveButton.touchAction('tap')
}

}

export default LanguagePage;