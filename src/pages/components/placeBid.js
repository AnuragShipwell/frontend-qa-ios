class PlaceBidPage{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
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
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Place Bid\"`]')
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
    async doneButton(){
        return await this.element('~Done')
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
async placeBid(bidLoadID, bidAmount){
const loadBoardBiddingButton= await this.loadBoardBiddingButton()
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
const doneButton=await this.doneButton()
const loadDetailsBackBtn= await this.loadDetailsBackBtn()
const clearTextButton= await this.clearTextButton()
const hamburgerButton= await this.hamburgerButton()

await loadBoardBiddingButton.waitForDisplayed({ timeout: 5000 })
await loadBoardBiddingButton.touchAction('tap')

if (await clearTextButton.isDisplayed()==true){
    await clearTextButton.touchAction('tap')
}

await this.driver.pause(4000)
await loadBoardSearchField.touchAction('tap')
await loadBoardSearchField.setValue(bidLoadID) //LIDT2CGWP

await loadBoardOpenShipmentPlaceBid.waitForDisplayed({ timeout: 10000 })
await loadBoardOpenShipmentPlaceBid.waitForEnabled({ timeout: 10000 })
await loadBoardOpenShipmentPlaceBid.touchAction('tap')

await loadBoardOpenShipmentPlaceBidTitle.waitForDisplayed({ timeout: 5000 })
await loadBoardOpenShipmentPlaceBidModeDropDown.waitForDisplayed({ timeout: 5000 })
await loadBoardOpenShipmentPlaceBidEquipmentDropDown.waitForDisplayed({ timeout: 5000 })

await loadBoardOpenShipmentPlaceBidAmountDropDown.waitForDisplayed({ timeout: 5000 })
await loadBoardOpenShipmentPlaceBidAmountDropDown.waitForEnabled({ timeout: 5000 })
await loadBoardOpenShipmentPlaceBidAmountDropDown.touchAction('tap')
await loadBoardOpenShipmentPlaceBidAmountDropDown.setValue(bidAmount)

await doneButton.waitForDisplayed({ timeout: 5000 })
await doneButton.waitForEnabled({ timeout: 5000 })
await doneButton.touchAction('tap')
await loadBoardOpenShipmentPlaceBidSubmitButton.waitForDisplayed({ timeout: 5000 })
await loadBoardOpenShipmentPlaceBidSubmitButton.waitForEnabled({ timeout: 5000 })
await loadBoardOpenShipmentPlaceBidSubmitButton.touchAction('tap')

await loadBoardOpenShipmentPlaceBidSuccessModal.waitForDisplayed({ timeout: 5000 })
await loadBoardOpenShipmentPlaceBidSuccessModal.waitForEnabled({ timeout: 5000 })

await loadBoardOpenShipmentPlaceBidSuccessModalFndMoreLoadButton.waitForDisplayed({ timeout: 5000 })
await loadBoardOpenShipmentPlaceBidSuccessModalFndMoreLoadButton.waitForEnabled({ timeout: 5000 })
await loadBoardOpenShipmentPlaceBidSuccessModalFndMoreLoadButton.touchAction('tap')
await this.driver.pause(3000)

//Going inside the shipment to place a bid from shipment details
await biddingLoadIDText.waitForExist({ timeout: 5000 })
await biddingLoadIDText.waitForEnabled({ timeout: 5000 })
await biddingLoadIDText.touchAction('tap')

await loadBoardOpenShipmentPlaceBid.waitForDisplayed({ timeout: 5000 })
await loadBoardOpenShipmentPlaceBid.waitForEnabled({ timeout: 5000 })
await loadBoardOpenShipmentPlaceBid.touchAction('tap')

await loadBoardOpenShipmentPlaceBidTitle.waitForDisplayed({ timeout: 5000 })
await loadBoardOpenShipmentPlaceBidModeDropDown.waitForDisplayed({ timeout: 5000 })
await loadBoardOpenShipmentPlaceBidEquipmentDropDown.waitForDisplayed({ timeout: 5000 })

await loadBoardOpenShipmentPlaceBidAmountDropDown.waitForEnabled({ timeout: 5000 })
await loadBoardOpenShipmentPlaceBidAmountDropDown.touchAction('tap')
await loadBoardOpenShipmentPlaceBidAmountDropDown.setValue(bidAmount)

await doneButton.waitForExist({ timeout: 5000 })
await doneButton.touchAction('tap')

await loadBoardOpenShipmentPlaceBidSubmitButton.waitForExist({ timeout: 5000 })
await loadBoardOpenShipmentPlaceBidSubmitButton.touchAction('tap')

await loadBoardOpenShipmentPlaceBidSuccessModal.waitForDisplayed({ timeout: 5000 })

await loadBoardOpenShipmentPlaceBidSuccessModalFndMoreLoadButton.waitForExist({ timeout: 5000 })
await loadBoardOpenShipmentPlaceBidSuccessModalFndMoreLoadButton.touchAction('tap')

await this.driver.pause(3000)
await loadDetailsBackBtn.touchAction('tap')
await this.driver.pause(3000)

//await clearTextButton.waitForExist({ timeout: 10000 })
//await clearTextButton.touchAction('tap')

//await hamburgerButton.waitForExist({ timeout: 5000 })
//await hamburgerButton.touchAction('tap')

}
}

export default PlaceBidPage;