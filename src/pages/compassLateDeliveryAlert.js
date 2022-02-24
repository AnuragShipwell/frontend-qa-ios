class CompassLateDeliveryAlert{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    async shipperCompassViewLateDeliveryAlerts(){
        return await this.element("~Late Delivery")
    }
    async shipperCompassViewLateDeliveryTitle(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Late Delivery\"`]')
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
    async shipwellSpinner(){
        return await this.element('~ShipwellSpinner')
    }
    async compassShipmentCard(){
        return await this.element("-ios class chain:**/XCUIElementTypeOther[`name == \"SWCompassShipmentListViewController\"`]/XCUIElementTypeTable/XCUIElementTypeCell[1]")
    }
    async compassActionButton(){
        return await this.element('~Actions')
    }
    async editDeliveryAppointmentTime(){
        return await this.element("~Edit Delivery Appointment")
    }
    async saveButton(){
        return await this.element('-ios class chain:**/XCUIElementTypeStaticText[`label == \"Save\"`]')
    }
    async backButton(){
        return await this.element("~back icon")
    }
    async cancelButton(){
        return await this.element("-ios class chain:**/XCUIElementTypeButton[`label == \"Cancel\"`]")
    }
    async stopDetailsbackButton(){
        return await this.element("~StopDetailsBackBtn")
    }

async lateDeliveryAlert(){
    const shipperCompassViewLateDeliveryAlerts= await this.shipperCompassViewLateDeliveryAlerts()
    const shipperCompassViewLateDeliveryTitle= await this.shipperCompassViewLateDeliveryTitle()
    const shipperCompassViewShipmentButton= await this.shipperCompassViewShipmentButton()
    const shipperCompassViewMapViewButton= await this.shipperCompassViewMapViewButton()
    const mapView= await this.mapView()
    const shipwellSpinner= await this.shipwellSpinner()
    const compassShipmentCard= await this.compassShipmentCard()
    const compassActionButton= await this.compassActionButton()
    const editDeliveryAppointmentTime= await this.editDeliveryAppointmentTime()
    const saveButton= await this.saveButton()
    const backButton= await this.backButton()
    const cancelButton= await this.cancelButton()
    const stopDetailsbackButton= await this.stopDetailsbackButton()

    if (await shipperCompassViewLateDeliveryAlerts.isDisplayed()==false){
        await this.driver.touchPerform([
            {action: "longPress", options: {x: 14, y: 215}},
            { action: 'wait', options: { ms: 100 }},
            {action: "moveTo", options: {x: 14, y: 680}},
            {action: "release"},
        ])
        if(await shipperCompassViewLateDeliveryAlerts.isDisplayed()==false){
            await this.driver.touchPerform([
                {action: "longPress", options: {x: 14, y: 680}},
                { action: 'wait', options: { ms: 100 }},
                {action: "moveTo", options: {x: 14, y: 215}},
                {action: "release"},
            ])
        }
    }
    //Late Delivery View
    await shipperCompassViewLateDeliveryAlerts.touchAction('tap')
    try{
        await shipperCompassViewLateDeliveryTitle.waitForDisplayed({ timeout: 15000 })
        await shipperCompassViewShipmentButton.waitForDisplayed({timeout: 15000})
        await shipperCompassViewMapViewButton.waitForDisplayed({timeout: 15000})

        await shipperCompassViewMapViewButton.touchAction('tap')
        await mapView.waitForDisplayed({timeout: 5000})

        await shipperCompassViewShipmentButton.touchAction('tap')
        await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
        await compassShipmentCard.waitForDisplayed({timeout: 15000})
        await compassShipmentCard.touchAction('tap')
        await shipwellSpinner.waitForDisplayed({timeout: 15000, reverse: true})
        await compassActionButton.waitForDisplayed({timeout: 15000})
        await compassActionButton.touchAction('tap')
    //Edit Delivery Appointment time

        await editDeliveryAppointmentTime.waitForDisplayed({timeout: 15000})
        await editDeliveryAppointmentTime.touchAction('tap')

        await saveButton.waitForDisplayed({timeout: 15000})
        await saveButton.touchAction('tap')
        await this.driver.pause(1000)
        if (await shipwellSpinner.isDisplayed()){
            await shipwellSpinner.waitForDisplayed({timeout: 60000, reverse: true})
        }
        else{
            await this.driver.pause(3000)
        }
        await backButton.waitForDisplayed({timeout: 15000})
        await backButton.touchAction('tap')

        if (await cancelButton.isDisplayed()==true){
            await cancelButton.touchAction('tap')
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
    }
    catch (error){
        console.log(error)
    }
    }
}
export default CompassLateDeliveryAlert