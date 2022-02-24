class CompassCarrierNotAssignedAlert{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    async shipperCompassViewCarrierNotAssignedAlerts(){
        return await this.element("~Carrier Not Assigned")
    }
    async shipperCompassViewCarrierNotAssignedTitle(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Carrier Not Assigned\"`]')
    }
    async compassShipmentCard(){
        return await this.element("-ios class chain:**/XCUIElementTypeOther[`name == \"SWCompassShipmentListViewController\"`]/XCUIElementTypeTable/XCUIElementTypeCell[1]")
    }
    async shipperCompassViewShipmentButton(){
        return await this.element("-ios class chain:**/XCUIElementTypeStaticText[`label == \"SHIPMENT LIST\"`]")
    }
    async shipperCompassViewMapViewButton(){
        return await this.element("-ios class chain:**/XCUIElementTypeStaticText[`label == \"MAP VIEW\"`]")
    }
    async mapView(){
        return await this.element("-ios predicate string:type == \"XCUIElementTypeMap\" ")
    }
    async shipperCompassViewCarrierNotAssignedCard(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Carrier Not Assigned \"`][1]')
    }
    async compassActionButton(){
        return await this.element('~Actions')
    }
    async CNAshipmentPU(){
        return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"SWSideMenuContainerController\"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther')
    }
    async CNAPredictedMarketPrice(){
        return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"SWSideMenuContainerController\"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[2]')
    }
    async CNABidsAndTenders(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Bids and Tenders\"`]')
    }
    async CNARoutingGuides(){
        return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"SWSideMenuContainerController\"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[4]')
    }
    async CNAlogANewBidButton(){
        return await this.element('~Log a New Bid')
    }
    async CNArequestBid(){
        return await this.element('~Request Bids')
    }
    async CNAtenderToCarrier(){
        return await this.element('~Tender to Carrier(s)')
    }
    async CNApushToRoutingGuide(){
        return await this.element('~Push to Routing Guide')
    }
    async dismissButton(){
        return await this.element('~Dismiss')
    }
    async CNAnewBidTitle(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"New Bid\"`]')
    }
    async CNAnewBidUSDOT_CarrierTag(){
        return await this.element('-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][1]')
    }
    async CNAcarrierNameInput(){
        return await this.element('-ios class chain:**/XCUIElementTypeOther[`name == \"SWSideMenuContainerController\"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]')
    }
    async CNAspecialInstruction(){
        return await this.element('(//XCUIElementTypeTextField[@name=\"enterEmail\"])[3]')
    }
    async CNAcarrierNameInputResult(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Anurag_Carrier001\"`]')
    }
    async CNAnewBidUSDOTSearchResult(){
         return await this.element('~BEST FREIGHT LOGISTICS LLC')
    }
    async CNAnewBidAvailableLocation(){
        return await this.element('-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][6]')
    }
    async CNAnewBidAvailableLocationResult(){
         return await this.element('~Austin, TX 78701, US')
    }
    async CNAnewBidBidAmount(){
        return await this.element('-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][7]')
    }
    async CNAbidDetailsText(){
        return await this.element('~Bid Details')
    }
    async CNAcarrierSearchText(){
        return await this.element('~Carrier Search')
    }
    async CNACancelButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Cancel\"`]')
    }
    async CNACreateButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"Create\"`]')
    }
    async CNARoutingGuideTitle(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Push to Routing Guide\"`]')
    }
    async CNARoutingGuideInput(){
         return await this.element("~enterEmail")
    }
    async CNARoutingGuideResult(){
         return await this.element("~Test defaults")
    }
    async CNARequestBidTitle(){
          return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Request Bids\"`]')
    }
    async CNARequestBidCarrierTagResult(){
        return await this.element('~TestTag')
    }
    async CNARequestBidCarrierTagEmail(){
         return await this.element('~Test Carrier - Aydin Gus aydin+carrier@shipwell.com')
    }
    async CNARequestBidCarrierTagCloseButton1(){
         return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"close icon white\"`][1]')
    }
    async CNARequestBidCarrierTagCloseButton2(){
        return await this.element('-ios class chain:**/XCUIElementTypeButton[`label == \"close icon white\"`][2]')
    }
    async CNATendersearchCarrierInputField(){
        return await this.element('-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][5]')
    }
    async CNATenderCarrierSearchResultText(){
         return await this.element('~Anurag_Carrier001')
    }
    async CNATendermodeFeild(){
        return await this.element('-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][6]')
    }
    async CNATenderEquipmentFeild(){
        return await this.element('-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][7]')
    }
    async CNATenderRateFeild(){
        return await this.element('-ios class chain:**/XCUIElementTypeTextField[`label == \"enterEmail\"`][1]')
    }
    async shipwellSpinner(){
        return await this.element('~ShipwellSpinner')
    }
    async doneButton(){
        return await this.element("~Done")
    }
    async stopDetailsbackButton(){
        return await this.element("~StopDetailsBackBtn")
    }
    async backButton(){
        return await this.element("~back icon")
    }
    async carrierNotAssignedAlert(){
        const shipperCompassViewCarrierNotAssignedAlerts= await this.shipperCompassViewCarrierNotAssignedAlerts()
        const shipperCompassViewCarrierNotAssignedTitle= await this.shipperCompassViewCarrierNotAssignedTitle()
        const compassShipmentCard= await this.compassShipmentCard()
        const shipperCompassViewShipmentButton= await this.shipperCompassViewShipmentButton()
        const shipperCompassViewMapViewButton= await this.shipperCompassViewMapViewButton()
        const mapView= await this.mapView()
        const shipperCompassViewCarrierNotAssignedCard= await this.shipperCompassViewCarrierNotAssignedCard()
        const compassActionButton= await this.compassActionButton()
        const CNAshipmentPU= await this.CNAshipmentPU()
        const CNAPredictedMarketPrice= await this.CNAPredictedMarketPrice()
        const CNABidsAndTenders= await this.CNABidsAndTenders()
        const CNARoutingGuides= await this.CNARoutingGuides()
        const CNAlogANewBidButton= await this.CNAlogANewBidButton()
        const CNArequestBid= await this.CNArequestBid()
        const CNAtenderToCarrier= await this.CNAtenderToCarrier()
        const CNApushToRoutingGuide= await this.CNApushToRoutingGuide()
        const dismissButton= await this.dismissButton()
        const CNAnewBidTitle= await this.CNAnewBidTitle()
        const CNAnewBidUSDOT_CarrierTag= await this.CNAnewBidUSDOT_CarrierTag()
        const CNAcarrierNameInput= await this.CNAcarrierNameInput()
        const CNAspecialInstruction= await this.CNAspecialInstruction()
        const CNAcarrierNameInputResult= await this.CNAcarrierNameInputResult()
        const CNAnewBidUSDOTSearchResult= await this.CNAnewBidUSDOTSearchResult()
        const CNAnewBidAvailableLocation= await this.CNAnewBidAvailableLocation()
        const CNAnewBidAvailableLocationResult= await this.CNAnewBidAvailableLocationResult()
        const CNAnewBidBidAmount= await this.CNAnewBidBidAmount()
        const CNAbidDetailsText= await this.CNAbidDetailsText()
        const CNAcarrierSearchText= await this.CNAcarrierSearchText()
        const CNACancelButton= await this.CNACancelButton()
        const CNACreateButton= await this.CNACreateButton()
        const CNARoutingGuideTitle= await this.CNARoutingGuideTitle()
        const CNARoutingGuideInput= await this.CNARoutingGuideInput()
        const CNARoutingGuideResult= await this.CNARoutingGuideResult()
        const CNARequestBidTitle= await this.CNARequestBidTitle()
        const CNARequestBidCarrierTagResult= await this.CNARequestBidCarrierTagResult()
        const CNARequestBidCarrierTagEmail= await this.CNARequestBidCarrierTagEmail()
        const CNARequestBidCarrierTagCloseButton1= await this.CNARequestBidCarrierTagCloseButton1()
        const CNARequestBidCarrierTagCloseButton2= await this.CNARequestBidCarrierTagCloseButton2()
        const CNATendersearchCarrierInputField= await this.CNATendersearchCarrierInputField()
        const CNATenderCarrierSearchResultText= await this.CNATenderCarrierSearchResultText()
        const CNATendermodeFeild= await this.CNATendermodeFeild()
        const CNATenderEquipmentFeild= await this.CNATenderEquipmentFeild()
        const CNATenderRateFeild= await this.CNATenderRateFeild()
        const shipwellSpinner= await this.shipwellSpinner()
        const doneButton= await this.doneButton()
        const stopDetailsbackButton= await this.stopDetailsbackButton()
        const backButton= await this.backButton()
        
        if (await shipperCompassViewCarrierNotAssignedAlerts.isDisplayed()==false){
            await this.driver.touchPerform([
                {action: "longPress", options: {x: 14, y: 215}},
                { action: 'wait', options: { ms: 100 }},
                {action: "moveTo", options: {x: 14, y: 680}},
                {action: "release"},
            ])
            if(await shipperCompassViewCarrierNotAssignedAlerts.isDisplayed()==false){
                await this.driver.touchPerform([
                    {action: "longPress", options: {x: 14, y: 680}},
                    { action: 'wait', options: { ms: 100 }},
                    {action: "moveTo", options: {x: 14, y: 215}},
                    {action: "release"},
                ])
            }
        }
        //Carrier Not Assigned View   
        await shipperCompassViewCarrierNotAssignedAlerts.touchAction('tap')
        try{
            await shipperCompassViewCarrierNotAssignedTitle.waitForDisplayed({ timeout: 15000 })
            await compassShipmentCard.waitForDisplayed({timeout: 15000})
            await shipperCompassViewShipmentButton.waitForDisplayed({timeout: 15000})
            await shipperCompassViewMapViewButton.waitForDisplayed({timeout: 15000})

            await shipperCompassViewMapViewButton.touchAction('tap')
            await mapView.waitForDisplayed({timeout: 5000})

            await shipperCompassViewShipmentButton.waitForDisplayed({ timeout: 15000 })
            await shipperCompassViewShipmentButton.touchAction('tap')

            await shipperCompassViewCarrierNotAssignedCard.waitForDisplayed({ timeout: 15000 })
            await shipperCompassViewCarrierNotAssignedCard.touchAction('tap')

            await compassActionButton.waitForDisplayed({ timeout: 15000 })
            await compassActionButton.waitForEnabled({ timeout: 15000 })
            await CNAshipmentPU.waitForDisplayed({ timeout: 15000 })
            await CNAPredictedMarketPrice.waitForDisplayed({ timeout: 15000 })
            await CNABidsAndTenders.waitForDisplayed({ timeout: 15000 })
            await this.driver.touchPerform([
                {action: "longPress", options: {x: 4, y: 700}},
                { action: 'wait', options: { ms: 100 }},
                {action: "moveTo", options: {x: 4, y: 100}},
                {action: "release"},
            ])
            await CNARoutingGuides.waitForDisplayed({ timeout: 5000 })
            await this.driver.pause(3000)
            await compassActionButton.touchAction('tap')
            await CNAlogANewBidButton.waitForDisplayed({ timeout: 15000 })
            await CNArequestBid.waitForDisplayed({ timeout: 15000 })
            await CNAtenderToCarrier.waitForDisplayed({ timeout: 15000 })
            await CNApushToRoutingGuide.waitForDisplayed({ timeout: 15000 })
            await dismissButton.waitForDisplayed({ timeout: 15000 })
            //CNA: Log new Bid
            await CNAlogANewBidButton.touchAction('tap')
            await CNAnewBidTitle.waitForDisplayed({ timeout: 15000 })
            await CNAcarrierSearchText.waitForDisplayed({ timeout: 15000 })
            await CNAbidDetailsText.waitForDisplayed({ timeout: 15000 })
            await CNAnewBidUSDOT_CarrierTag.waitForDisplayed({ timeout: 15000 })
            await CNAnewBidUSDOT_CarrierTag.setValue('12')
            await CNAnewBidUSDOTSearchResult.waitForDisplayed({ timeout: 40000 })
            await CNAnewBidUSDOTSearchResult.touchAction('tap')
            await this.driver.pause(3000)
            if (await doneButton.isDisplayed()){
                await doneButton.touchAction('tap')
            }
            await CNAnewBidAvailableLocation.waitForDisplayed({ timeout: 40000 })
            await CNAnewBidAvailableLocation.touchAction('tap')
            await CNAnewBidAvailableLocation.setValue('Austin, TX 78701, US')
            await this.driver.touchPerform([
                {action: "longPress", options: {x: 4, y: 350}},
                { action: 'wait', options: { ms: 100 }},
                {action: "moveTo", options: {x: 4, y: 125}},
                {action: "release"},
                ])
            await CNAnewBidAvailableLocationResult.waitForDisplayed({ timeout: 15000 })
            await CNAnewBidAvailableLocationResult.touchAction('tap')
            await CNAnewBidBidAmount.setValue('1000')
            if (await doneButton.isDisplayed()){
                 await doneButton.touchAction('tap')
            }
            await this.driver.touchPerform([
                {action: "longPress", options: {x: 4, y: 600}},
                { action: 'wait', options: { ms: 100 }},
                {action: "moveTo", options: {x: 4, y: 158}},
                {action: "release"},
            ])

            await CNACancelButton.waitForDisplayed({ timeout: 15000 })

            await CNACreateButton.waitForDisplayed({ timeout: 15000 })
            await CNACreateButton.touchAction('tap')
            await CNAnewBidUSDOTSearchResult.waitForDisplayed({ timeout: 15000 })
            await this.driver.pause(1000)
            if (await shipwellSpinner.isDisplayed()){
                await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
            }
            else{
                await this.driver.pause(3000)
            }

/*
//Tender to Carrier
await compassActionButton.waitForDisplayed({ timeout: 15000 })
await compassActionButton.waitForEnabled({ timeout: 15000 })
await compassActionButton.touchAction('tap')
await CNAtenderToCarrier.waitForDisplayed({ timeout: 15000 })
await CNAtenderToCarrier.waitForEnabled({ timeout: 15000 })
await CNAtenderToCarrier.touchAction('tap')*/

//CNA: Routing Guide
            await compassActionButton.waitForDisplayed({ timeout: 15000 })
            await compassActionButton.touchAction('tap')
            await CNApushToRoutingGuide.waitForDisplayed({ timeout: 15000 })
            await CNApushToRoutingGuide.touchAction('tap')
            await CNARoutingGuideTitle.waitForDisplayed({ timeout: 15000 })
            await CNARoutingGuideInput.waitForDisplayed({ timeout: 15000 })
            await CNARoutingGuideInput.setValue('Test')
            await CNARoutingGuideResult.waitForDisplayed({ timeout: 15000 })
            await CNARoutingGuideResult.touchAction('tap')
            await CNACreateButton.waitForDisplayed({ timeout: 15000 })
            await CNACreateButton.touchAction('tap')
            await this.driver.pause(1000)
            if (await shipwellSpinner.isDisplayed()){
                await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
            }
            else{
                await this.driver.pause(3000)
            }
            //CNA: Request bid
            await compassActionButton.waitForDisplayed({ timeout: 15000 })
            await compassActionButton.touchAction('tap')
            await CNArequestBid.waitForDisplayed({ timeout: 15000 })
            await CNArequestBid.touchAction('tap')
            if (await shipwellSpinner.isDisplayed()==true){
                await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
            }
            else{
                await this.driver.pause(10000)
            }
            await CNARequestBidTitle.waitForDisplayed({ timeout: 10000 })
            await CNAcarrierNameInput.waitForDisplayed({ timeout: 15000 })
            await CNAcarrierNameInput.setValue('Anurag')
            await CNAcarrierNameInputResult.waitForDisplayed({ timeout: 8000 })
            await CNAcarrierNameInputResult.touchAction('tap')
            await CNAspecialInstruction.setValue("Test")
            await doneButton.touchAction('tap')
            await CNACreateButton.waitForDisplayed({ timeout: 15000 })
            await CNACreateButton.touchAction('tap')
            await this.driver.pause(1000)
            if (await shipwellSpinner.isDisplayed()){
                await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
            }
            else{
                await this.driver.pause(10000)
            }
            await stopDetailsbackButton.waitForDisplayed({ timeout: 8000 })
            await stopDetailsbackButton.waitForEnabled({ timeout: 8000 })
            await stopDetailsbackButton.touchAction('tap')
            if (await shipwellSpinner.isDisplayed()){
                await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
            }
            else{
                await this.driver.pause(3000)
            }
            await backButton.waitForDisplayed({ timeout: 15000 })
            await backButton.touchAction('tap')
            }
        catch (error){
            console.log(error)
        }
    }
}
export default CompassCarrierNotAssignedAlert