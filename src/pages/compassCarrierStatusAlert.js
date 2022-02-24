class CompassCarrierStatusAlert{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    async shipperCompassViewCarrierStatusAlerts(){
        return await this.element('~Carrier Status')
    }
    async shipperCompassViewCarrierStatusTitle(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Carrier Status\"`]')
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
    async carrierStatusCarrierHeader(){
        return await this.element("-ios class chain:**/XCUIElementTypeStaticText[`label == \"Carrier Details\"`]")
    }
    async stopDetailsbackButton(){
        return await this.element("~StopDetailsBackBtn")
    }
    async shipwellSpinner(){
        return await this.element('~ShipwellSpinner')
    }
    async backButton(){
        return await this.element("~back icon")
    }
    async carrierStatusAlert(){
        const shipperCompassViewCarrierStatusAlerts= await this.shipperCompassViewCarrierStatusAlerts()
        const shipperCompassViewCarrierStatusTitle= await this.shipperCompassViewCarrierStatusTitle()
        const compassShipmentCard= await this.compassShipmentCard()
        const shipperCompassViewShipmentButton= await this.shipperCompassViewShipmentButton()
        const shipperCompassViewMapViewButton= await this.shipperCompassViewMapViewButton()
        const mapView= await this.mapView()
        const carrierStatusCarrierHeader= await this.carrierStatusCarrierHeader()
        const stopDetailsbackButton= await this.stopDetailsbackButton()
        const shipwellSpinner= await this.shipwellSpinner()
        const backButton= await this.backButton()


        if (await shipperCompassViewCarrierStatusAlerts.isDisplayed()==false){
            await this.driver.touchPerform([
                {action: "longPress", options: {x: 14, y: 215}},
                { action: 'wait', options: { ms: 100 }},
                {action: "moveTo", options: {x: 14, y: 680}},
                {action: "release"},
            ])
            if(await shipperCompassViewCarrierStatusAlerts.isDisplayed()==false){
                await this.driver.touchPerform([
                    {action: "longPress", options: {x: 14, y: 680}},
                    { action: 'wait', options: { ms: 100 }},
                    {action: "moveTo", options: {x: 14, y: 215}},
                    {action: "release"},
                ])
            }
        }
    //Carrier Status View
        await shipperCompassViewCarrierStatusAlerts.waitForDisplayed({ timeout: 15000 })
        await shipperCompassViewCarrierStatusAlerts.touchAction('tap')
 
        try{
            await shipperCompassViewCarrierStatusTitle.waitForDisplayed({ timeout: 15000 })
            await compassShipmentCard.waitForDisplayed({timeout: 5000})
            await shipperCompassViewShipmentButton.waitForDisplayed({timeout: 15000})
            await shipperCompassViewMapViewButton.waitForDisplayed({timeout: 15000})

            await shipperCompassViewMapViewButton.touchAction('tap')
            await mapView.waitForDisplayed({timeout: 5000})

            await shipperCompassViewShipmentButton.touchAction('tap')
            await compassShipmentCard.waitForDisplayed({timeout: 15000})
            await compassShipmentCard.touchAction('tap')

            await carrierStatusCarrierHeader.waitForDisplayed({timeout: 15000})

            await stopDetailsbackButton.waitForDisplayed({timeout: 15000})
            await stopDetailsbackButton.touchAction('tap')
            if (await shipwellSpinner.isDisplayed()==true){
                    await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
            }
            else{
                    await this.driver.pause(3000)
            }
            await backButton.waitForDisplayed({timeout: 15000})
            await backButton.touchAction('tap')
        }
        catch (error){
            console.log(error)
        }
    }
}

export default CompassCarrierStatusAlert