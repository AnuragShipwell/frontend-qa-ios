class ShipmentPage{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    
    async hamburger(){
        return await this.element('~menu hamburger')
    }
    async shipmentButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Shipments\"`]')
    }
    async shipmentActiveButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeTable[`name == \"SWSideMenuController-table\"`]/XCUIElementTypeCell[1]/XCUIElementTypeOther/XCUIElementTypeOther')
    }
    async shipActiveButtonInside(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"ACTIVE\"`]')
    }
    async shipDeliveredButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"DELIVERED\"`]')
    }
    async shipShipmentListTitle(){
        return await this.element('~ShipmentListTitle')
    }
    async shipShipmentSearchInput(){
        return await this.element('~Search Shipments') //=====================//
    }
    async shipSearchedShipmentText(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"# 5RUCFH\"`]')
    }
    async shipmentTitletext(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"5RUCFH\"`]')
    }
    async shipDispatchedText(){
        return await this.element('~DISPATCHED')
    }
    async shipDispatchedTextTick(){
        return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"SWSideMenuContainerController\"`]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[4]/XCUIElementTypeCollectionView/XCUIElementTypeCell[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeImage')
    }
    async shipAtPickupText(){
        return await this.element('~AT PICKUP')
    }
    async shipAtPickupTick(){
        return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"SWSideMenuContainerController\"`]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[4]/XCUIElementTypeCollectionView/XCUIElementTypeCell[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeImage')
    }
    async shipPickedUpText(){
        return await this.element('~PICKED UP')
    }
    async shipPickedUpTick(){
        return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"SWSideMenuContainerController\"`]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[4]/XCUIElementTypeCollectionView/XCUIElementTypeCell[3]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeImage')
    }
    async shipAtDeliveryText(){
        return await this.element('~AT DELIVERY')
    }
    async shipAtDeliveryTick(){
        return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"SWSideMenuContainerController\"`]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[4]/XCUIElementTypeCollectionView/XCUIElementTypeCell[4]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeImage')
    }
    async shipDeliveredText(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"DELIVERED\"`][2]')
    }
    async shipDeliveredTick(){
        return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"SWSideMenuContainerController\"`]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[4]/XCUIElementTypeCollectionView/XCUIElementTypeCell[4]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeImage')
    }
    async shipMapPin1(){
        return await this.element('-ios class chain:**/XCUIElementTypeOther[`label == \"Map pin\"`][1]') //===============//
    }
    async shipMapPin2(){
        return await this.element('-ios class chain:**/XCUIElementTypeOther[`label == \"Map pin\"`][2]') //===============//
    }
    async shipViewConstrollerSwipeUp(){
        return await this.element('~ShipmentDetailsViewController-swipeup')
    }
    async shipPickupPinNumber(){
        return await this.element('~1')
    }
    async shipDeliveryTitle(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Delivery\"`]')
    }
    async ShipReferencesTitle(){
        return await this.element('~DetailsReferencesTitle')
    }
    async shipNotesTile(){
        return await this.element('~DetailsNotesTitle')
    }
    async shipEquipmentExpandButton(){
        return await this.element('~DetailsEquipmentExpandBtn')
    }
    async shipLineTitle(){
        return await this.element('~LineItemTitle')
    }
    async backButton(){
        return await this.element('~back icon')
    }
    async shipwellSpinner(){
        return await this.element('~ShipwellSpinner')
    }

    async shipment(activeShipmentID, timeOut){
        const hamburger= await this.hamburger()
        const shipmentButton= await this.shipmentButton()
        const shipmentActiveButton= await this.shipmentActiveButton()
        const shipActiveButtonInside= await this.shipActiveButtonInside()
        const shipDeliveredButton= await this.shipDeliveredButton()
        const shipShipmentListTitle= await this.shipShipmentListTitle()
        const shipShipmentSearchInput= await this.shipShipmentSearchInput()
        const shipSearchedShipmentText= await this.shipSearchedShipmentText()
        const shipmentTitletext= await this.shipmentTitletext()
        const shipDispatchedText= await this.shipDispatchedText()
        const shipDispatchedTextTick= await this.shipDispatchedTextTick()
        const shipAtPickupText= await this.shipAtPickupText()
        const shipAtPickupTick= await this.shipAtPickupTick()
        const shipPickedUpText= await this.shipPickedUpText()
        const shipPickedUpTick= await this.shipPickedUpTick()
        const shipAtDeliveryText= await this.shipAtDeliveryText()
        const shipAtDeliveryTick= await this.shipAtDeliveryTick()
        const shipDeliveredText= await this.shipDeliveredText()
        const shipDeliveredTick= await this.shipDeliveredTick()
        const shipMapPin1= await this.shipMapPin1()
        const shipMapPin2= await this.shipMapPin2()
        const shipViewConstrollerSwipeUp= await this.shipViewConstrollerSwipeUp()
        const shipPickupPinNumber= await this.shipPickupPinNumber()
        const shipDeliveryTitle= await this.shipDeliveryTitle()
        const ShipReferencesTitle= await this.ShipReferencesTitle()
        const shipNotesTile= await this.shipNotesTile()
        const shipEquipmentExpandButton= await this.shipEquipmentExpandButton()
        const shipLineTitle= await this.shipLineTitle()
        const backButton=await this.backButton()
        const shipwellSpinner= await this.shipwellSpinner()

        if (await hamburger.isDisplayed()){
            await hamburger.touchAction('tap')
        }
        await this.driver.pause(1000)
        await shipmentButton.waitForDisplayed({ timeout: timeOut })
        await shipmentButton.touchAction('tap')
        await shipmentActiveButton.waitForDisplayed({ timeout: timeOut })
        await shipmentActiveButton.touchAction('tap')
        await this.driver.pause(1000)
        if (await shipwellSpinner.isDisplayed()){
            await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
            }
          else{
            await this.driver.pause(4000)
          }
        await shipActiveButtonInside.waitForDisplayed({ timeout: timeOut })
        await shipDeliveredButton.waitForDisplayed({ timeout: timeOut })
        await shipShipmentListTitle.waitForDisplayed({ timeout: timeOut })

        await shipShipmentSearchInput.waitForDisplayed({ timeout: timeOut })
        await shipShipmentSearchInput.touchAction('tap')
        await shipShipmentSearchInput.setValue(activeShipmentID)
        await this.driver.pause(1000)
        await shipSearchedShipmentText.waitForDisplayed({ timeout: timeOut })
        await shipSearchedShipmentText.touchAction('tap')

        await shipmentTitletext.waitForDisplayed({ timeout: timeOut })
        await shipDispatchedText.waitForDisplayed({ timeout: timeOut })
        await shipDispatchedTextTick.waitForDisplayed({ timeout: timeOut })
        await shipAtPickupText.waitForDisplayed({ timeout: timeOut })
        await shipAtPickupTick.waitForDisplayed({ timeout: timeOut })
        await shipPickedUpText.waitForDisplayed({ timeout: timeOut })
        await shipPickedUpTick.waitForDisplayed({ timeout: timeOut })
        await shipAtDeliveryText.waitForDisplayed({ timeout: timeOut })
        await shipAtDeliveryTick.waitForDisplayed({ timeout: timeOut })

        await this.driver.touchPerform([
            {action: "longPress", options: {x: 111, y: 151}},
            { action: 'wait', options: { ms: 100 }},
            {action: "moveTo", options: {x: 0, y: 151}},
            {action: "release"},
        ])

        await shipDeliveredText.waitForDisplayed({ timeout: timeOut })
        await shipDeliveredTick.waitForDisplayed({ timeout: timeOut })
        await shipMapPin1.waitForDisplayed({ timeout: timeOut })
        await shipMapPin2.waitForDisplayed({ timeout: timeOut })
        await shipViewConstrollerSwipeUp.waitForDisplayed({ timeout: timeOut })
        
        await this.driver.touchPerform([
            {action: "longPress", options: {x: 162, y: 662}},
            { action: 'wait', options: { ms: 100 }},
            {action: "moveTo", options: {x: 162, y: 151}},
            {action: "release"},
        ])

        await shipPickupPinNumber.waitForDisplayed({ timeout: timeOut })
        await shipDeliveryTitle.waitForDisplayed({ timeout: timeOut })
        await ShipReferencesTitle.waitForDisplayed({ timeout: timeOut })
        
        await this.driver.touchPerform([
            {action: "longPress", options: {x: 31, y: 753}},
            { action: 'wait', options: { ms: 100 }},
            {action: "moveTo", options: {x: 31, y: 284}},
            {action: "release"},
        ])

        await shipNotesTile.waitForDisplayed({ timeout: timeOut })
        await shipEquipmentExpandButton.waitForDisplayed({ timeout: timeOut })
        await shipEquipmentExpandButton.waitForDisplayed({ timeout: timeOut })
        await shipLineTitle.waitForDisplayed({ timeout: timeOut })
        await backButton.waitForDisplayed({ timeout: timeOut })
        await backButton.touchAction('tap')
        await this.driver.pause(1000)
   }
}
export default ShipmentPage