class PlaceBidPage{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    async loadBoardOpenButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Open\"`]')
    }
    async loadBoardBiddingButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Bidding\"`]')
    }
    async loadBoardSearchField(){
        return await this.element('~Search Loads')
    }
    async biddingLoadIDText(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"LIDT2CGWP\"`]')
    }
    async loadBoardOpenShipmentPlaceBid(){
        return await this.element('(//XCUIElementTypeButton[@name="LoadCardPlaceBidBtn"])[1]')
    }
    async loadBoardOpenShipmentPlaceBidTitle(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Place a Bid\"`]')
    }
    async loadBoardOpenShipmentPlaceBidModeDropDown(){
        return await this.element('-ios class chain:**/XCUIElementTypeTextField[`name == \"BidPageModeDropdown\"`]')
    }
    async loadBoardOpenShipmentPlaceBidEquipmentDropDown(){
        return await this.element('-ios class chain:**/XCUIElementTypeTextField[`name == \"BidPageEquipmentDropdown\"`]')
    }
    async loadBoardOpenShipmentPlaceBidAmountDropDown(){
        return await this.element('-ios class chain:**/XCUIElementTypeTextField[`name == \"BidPageBidField\"`]')
    }
    async loadBoardOpenShipmentPlaceBidSubmitButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Submit\"`]')
    }
    async loadBoardOpenShipmentPlaceBidSuccessModal(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Success!\"`]')
    }
    async loadBoardOpenShipmentPlaceBidSuccessModalFndMoreLoadButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Find More Loads\"`]')
    }
    async loadDetailsBackBtn(){
        return await this.element('~LoadDetailsBackBtn')
    }
    async clearTextButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Clear text\"`]')
    }
    async hamburgerButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"menu hamburger\"`]')
    }
    async shipwellSpinner(){
        return await this.element('~ShipwellSpinner')
    }
    async bidPageTitle(){
        return await this.element('~BidPageTitle')
    }
    async bidPageSubTitle(){
        return await this.element('~BidPageSubTitle')
    }
    async bidPageModeDropDown(){
        return await this.element('~BidPageModeDropdown')
    }
    async bidPageEquipmentDropDown(){
        return await this.element('~BidPageEquipmentDropdown')
    }
    async bidPageBidField(){
        return await this.element('~BidPageBidField')
    }
    async doneButton(){
        return await this.element("~Done")
    }
    async submitButton(){
        return await this.element("~Submit")
    }
    async findMoreLoadButton(){
        return await this.element("~Find More Loads")
    }
    async backButton(){
        return await this.element("~back icon")
    }

async placeBid(timeOut=60000){
    const loadBoardBiddingButton= await this.loadBoardBiddingButton()
    const loadBoardOpenButton= await this.loadBoardOpenButton()
    const loadBoardSearchField= await this.loadBoardSearchField()
    const biddingLoadIDText= await this.biddingLoadIDText()
    const loadBoardOpenShipmentPlaceBid= await this.loadBoardOpenShipmentPlaceBid()
    const loadBoardOpenShipmentPlaceBidTitle= await this.loadBoardOpenShipmentPlaceBidTitle()
    const loadBoardOpenShipmentPlaceBidModeDropDown= await this.loadBoardOpenShipmentPlaceBidModeDropDown()
    const loadBoardOpenShipmentPlaceBidEquipmentDropDown= await this.loadBoardOpenShipmentPlaceBidEquipmentDropDown()
    const loadBoardOpenShipmentPlaceBidAmountDropDown= await this.loadBoardOpenShipmentPlaceBidAmountDropDown()
    const loadBoardOpenShipmentPlaceBidSubmitButton= await this.loadBoardOpenShipmentPlaceBidSubmitButton()
    const loadBoardOpenShipmentPlaceBidSuccessModal= await this.loadBoardOpenShipmentPlaceBidSuccessModal()
    const loadBoardOpenShipmentPlaceBidSuccessModalFndMoreLoadButton= await this.loadBoardOpenShipmentPlaceBidSuccessModalFndMoreLoadButton()
    const loadDetailsBackBtn= await this.loadDetailsBackBtn()
    const clearTextButton= await this.clearTextButton()
    const hamburgerButton= await this.hamburgerButton()
    const shipwellSpinner= await this.shipwellSpinner()
    const bidPageTitle= await this.bidPageTitle()
    const bidPageSubTitle= await this.bidPageSubTitle()
    const bidPageModeDropDown= await this.bidPageModeDropDown()
    const bidPageEquipmentDropDown= await this.bidPageEquipmentDropDown()
    const bidPageBidField= await this.bidPageBidField()
    const doneButton= await this.doneButton()
    const submitButton= await this.submitButton()
    const findMoreLoadButton= await this.findMoreLoadButton()
    const backButton= await this.backButton()

    await this.driver.pause(5000)
    await loadBoardBiddingButton.waitForDisplayed({ timeout: timeOut })
    await loadBoardBiddingButton.touchAction('tap')

    await this.driver.pause(1000)
    if (await shipwellSpinner.isDisplayed()){
        await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
    }
    await this.driver.pause(5000)

    if (await loadBoardOpenShipmentPlaceBid.isDisplayed()==false){
        await loadBoardOpenButton.touchAction('tap')
        await this.driver.pause(2000)
        if (await shipwellSpinner.isDisplayed()){
            await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
            await this.driver.pause(5000)
        }
        await loadBoardBiddingButton.waitForDisplayed({ timeout: timeOut })
        await loadBoardBiddingButton.touchAction('tap')
        await this.driver.pause(2000)
        if (await shipwellSpinner.isDisplayed()){
            await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
            await this.driver.pause(5000)
        }
    }


    await loadBoardOpenShipmentPlaceBid.waitForDisplayed({ timeout: timeOut })
    await loadBoardOpenShipmentPlaceBid.touchAction('tap')

    await this.driver.pause(1000)
    if (await shipwellSpinner.isDisplayed()){
        await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
        await this.driver.pause(1000)
    }
    await this.driver.pause(20000)
    await bidPageTitle.waitForDisplayed({ timeout: timeOut })
    await bidPageSubTitle.waitForDisplayed({ timeout: timeOut })
    await bidPageModeDropDown.waitForDisplayed({ timeout: timeOut })
    await bidPageEquipmentDropDown.waitForDisplayed({ timeout: timeOut })
    await bidPageBidField.waitForDisplayed({ timeout: timeOut })
    await bidPageBidField.setValue('1000')
    if (await doneButton.isDisplayed()){
        doneButton.touchAction('tap')
    }
    await submitButton.waitForDisplayed({ timeout: timeOut })
    await submitButton.touchAction('tap')
    await this.driver.pause(2000)
    if (await submitButton.isDisplayed()){
        await backButton.touchAction('tap')
        await this.driver.pause(5000)
        await loadBoardOpenShipmentPlaceBid.waitForDisplayed({ timeout: timeOut })
        await loadBoardOpenShipmentPlaceBid.touchAction('tap')
        await this.driver.pause(1000)
        if (await shipwellSpinner.isDisplayed()){
            await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
            await this.driver.pause(1000)
        }
        await this.driver.pause(20000)
        await submitButton.waitForDisplayed({ timeout: timeOut })
        await submitButton.touchAction('tap')
        if (await shipwellSpinner.isDisplayed()){
            await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
            await this.driver.pause(1000)
        }
    }
    else if (await shipwellSpinner.isDisplayed()){
        await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
        await this.driver.pause(1000)
    }

    await findMoreLoadButton.waitForDisplayed({ timeout: timeOut })
    await findMoreLoadButton.touchAction('tap')

    await this.driver.pause(1000)
    if (await shipwellSpinner.isDisplayed()){
        await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
    }
    await this.driver.pause(5000)
/*

await loadBoardOpenShipmentPlaceBidTitle.waitForDisplayed({ timeout: timeOut })
await loadBoardOpenShipmentPlaceBidModeDropDown.waitForDisplayed({ timeout: timeOut })
await loadBoardOpenShipmentPlaceBidEquipmentDropDown.waitForDisplayed({ timeout: timeOut })

await loadBoardOpenShipmentPlaceBidAmountDropDown.waitForDisplayed({ timeout: timeOut })
await loadBoardOpenShipmentPlaceBidAmountDropDown.touchAction('tap')
await loadBoardOpenShipmentPlaceBidAmountDropDown.setValue(bidAmount)

if(await doneButton.isDisplayed()){
    await doneButton.touchAction('tap')
}
await loadBoardOpenShipmentPlaceBidSubmitButton.waitForDisplayed({ timeout: timeOut })
await loadBoardOpenShipmentPlaceBidSubmitButton.touchAction('tap')

await loadBoardOpenShipmentPlaceBidSuccessModal.waitForDisplayed({ timeout: timeOut })

await loadBoardOpenShipmentPlaceBidSuccessModalFndMoreLoadButton.waitForDisplayed({ timeout: timeOut })
await loadBoardOpenShipmentPlaceBidSuccessModalFndMoreLoadButton.touchAction('tap')
await this.driver.pause(3000)

//Going inside the shipment to place a bid from shipment details
await biddingLoadIDText.waitForDisplayed({ timeout: timeOut })
await biddingLoadIDText.touchAction('tap')

await loadBoardOpenShipmentPlaceBid.waitForDisplayed({ timeout: timeOut })
await loadBoardOpenShipmentPlaceBid.touchAction('tap')

await loadBoardOpenShipmentPlaceBidTitle.waitForDisplayed({ timeout: timeOut })
await loadBoardOpenShipmentPlaceBidModeDropDown.waitForDisplayed({ timeout: timeOut })
await loadBoardOpenShipmentPlaceBidEquipmentDropDown.waitForDisplayed({ timeout: timeOut })

await loadBoardOpenShipmentPlaceBidAmountDropDown.waitForDisplayed({ timeout: timeOut })
await loadBoardOpenShipmentPlaceBidAmountDropDown.touchAction('tap')
await loadBoardOpenShipmentPlaceBidAmountDropDown.setValue(bidAmount)

if (await doneButton.isDisplayed()){
    await doneButton.touchAction('tap')
}
await loadBoardOpenShipmentPlaceBidSubmitButton.waitForDisplayed({ timeout: timeOut })
await loadBoardOpenShipmentPlaceBidSubmitButton.touchAction('tap')

await loadBoardOpenShipmentPlaceBidSuccessModal.waitForDisplayed({ timeout: timeOut })

await loadBoardOpenShipmentPlaceBidSuccessModalFndMoreLoadButton.waitForDisplayed({ timeout: timeOut })
await loadBoardOpenShipmentPlaceBidSuccessModalFndMoreLoadButton.touchAction('tap')

await this.driver.pause(3000)
await loadDetailsBackBtn.waitForDisplayed({ timeout: timeOut })
await loadDetailsBackBtn.touchAction('tap')
await this.driver.pause(3000)

//await clearTextButton.waitForExist({ timeout: 10000 })
//await clearTextButton.touchAction('tap')

//await hamburgerButton.waitForExist({ timeout: 5000 })
//await hamburgerButton.touchAction('tap')
*/

}
}

export default PlaceBidPage;