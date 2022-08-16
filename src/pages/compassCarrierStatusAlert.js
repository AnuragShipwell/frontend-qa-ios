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
    async compassShipmentCard02(){
        return await this.element("//XCUIElementTypeOther[@name=\"SWCompassShipmentListViewController\"]/XCUIElementTypeTable/XCUIElementTypeCell[2]")
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
    async shipwellSpinner(){
        return await this.element('~ShipwellSpinner')
    }
    async carrierStatusAlert(timeOut=60000){
        const shipperCompassViewCarrierStatusAlerts= await this.shipperCompassViewCarrierStatusAlerts()
        const shipperCompassViewCarrierStatusTitle= await this.shipperCompassViewCarrierStatusTitle()
        const compassShipmentCard= await this.compassShipmentCard()
        const compassShipmentCard02= await this.compassShipmentCard02()
        const shipperCompassViewShipmentButton= await this.shipperCompassViewShipmentButton()
        const shipperCompassViewMapViewButton= await this.shipperCompassViewMapViewButton()
        const mapView= await this.mapView()
        const carrierStatusCarrierHeader= await this.carrierStatusCarrierHeader()
        const stopDetailsbackButton= await this.stopDetailsbackButton()
        const shipwellSpinner= await this.shipwellSpinner()
        const backButton= await this.backButton()

        await this.driver.pause(1000)
        if (await shipwellSpinner.isDisplayed()){
            await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
        }
        await this.driver.pause(3000)
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
        await shipperCompassViewCarrierStatusAlerts.waitForDisplayed({ timeout: timeOut })
        await shipperCompassViewCarrierStatusAlerts.touchAction('tap')
        await this.driver.pause(1000)
        try{
            if (await shipwellSpinner.isDisplayed()){
                await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
            }
            await this.driver.pause(1000)
            await shipperCompassViewCarrierStatusTitle.waitForDisplayed({ timeout: timeOut })
            await compassShipmentCard.waitForDisplayed({timeout: 5000})
            await shipperCompassViewShipmentButton.waitForDisplayed({timeout: timeOut})
            await shipperCompassViewMapViewButton.waitForDisplayed({timeout: timeOut})

            await shipperCompassViewMapViewButton.touchAction('tap')
            await mapView.waitForDisplayed({timeout: 5000})

            await shipperCompassViewShipmentButton.touchAction('tap')
            await compassShipmentCard.waitForDisplayed({timeout: timeOut})
            await compassShipmentCard.touchAction('tap')
            await this.driver.pause(3000)
            if (await compassShipmentCard.isDisplayed()){
                await compassShipmentCard02.waitForDisplayed({timeout: timeOut})
                await compassShipmentCard02.touchAction('tap')
            }
            await this.driver.pause(1000)
            if (await shipwellSpinner.isDisplayed()){
                await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
            }

            await carrierStatusCarrierHeader.waitForDisplayed({timeout: timeOut})

            await stopDetailsbackButton.waitForDisplayed({timeout: timeOut})
            await stopDetailsbackButton.touchAction('tap')
            await this.driver.pause(1000)
            if (await shipwellSpinner.isDisplayed()==true){
                    await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
            }
            else{
                    await this.driver.pause(3000)
            }
            await this.driver.pause(1000)
            await backButton.waitForDisplayed({timeout: timeOut})
            await backButton.touchAction('tap')
            await this.driver.pause(1000)
            if (await shipwellSpinner.isDisplayed()){
                await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
            }
        }
        catch (error){
            console.log(error)
        }
    }
}

export default CompassCarrierStatusAlert