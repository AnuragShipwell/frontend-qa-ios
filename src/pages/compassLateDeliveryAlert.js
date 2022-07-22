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

async lateDeliveryAlert(timeOut=60000){
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
    await this.driver.pause(1000)
    if (await shipwellSpinner.isDisplayed()){
        await shipwellSpinner.waitForDisplayed({timeout: 35000, reverse: true})
    }
    await this.driver.pause(3000)
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
    await shipperCompassViewLateDeliveryAlerts.waitForDisplayed({ timeout: timeOut })
    await shipperCompassViewLateDeliveryAlerts.touchAction('tap')
    await this.driver.pause(1000)
    try{
        if (await shipwellSpinner.isDisplayed()){
            await shipwellSpinner.waitForDisplayed({timeout: 60000, reverse: true})
        }
        await shipperCompassViewLateDeliveryTitle.waitForDisplayed({ timeout: timeOut })
        await shipperCompassViewShipmentButton.waitForDisplayed({timeout: timeOut})
        await shipperCompassViewMapViewButton.waitForDisplayed({timeout: timeOut})

        await shipperCompassViewMapViewButton.touchAction('tap')
        await mapView.waitForDisplayed({timeout: timeOut})

        await shipperCompassViewShipmentButton.touchAction('tap')
        await this.driver.pause(1000)
        if (await shipwellSpinner.isDisplayed()){
            await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
        }
        await compassShipmentCard.waitForDisplayed({timeout: timeOut})
        await compassShipmentCard.touchAction('tap')
        await this.driver.pause(1000)
        if (await shipwellSpinner.isDisplayed()){
            await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
        }
        await compassActionButton.waitForDisplayed({timeout: timeOut})
        await compassActionButton.touchAction('tap')
        await this.driver.pause(1000)
    //Edit Delivery Appointment time

        await editDeliveryAppointmentTime.waitForDisplayed({timeout: timeOut})
        await editDeliveryAppointmentTime.touchAction('tap')
        await this.driver.pause(1000)
        if (await shipwellSpinner.isDisplayed()){
            await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
        }
        await this.driver.pause(1000)
        await saveButton.waitForDisplayed({timeout: timeOut})
        await saveButton.touchAction('tap')
        await this.driver.pause(2000)
        if (await shipwellSpinner.isDisplayed()){
            await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
        }
        await this.driver.pause(5000)
        if (await shipperCompassViewLateDeliveryTitle.isDisplayed()){
            await backButton.waitForDisplayed({timeout: timeOut})
            await backButton.touchAction('tap')
            await this.driver.pause(1000)
        }

        else if (await cancelButton.isDisplayed()){
            await this.driver.pause(2000)
            await cancelButton.touchAction('tap')
            await stopDetailsbackButton.waitForDisplayed({timeout: timeOut})
            await stopDetailsbackButton.touchAction('tap')
            await this.driver.pause(1000)
            if (await shipwellSpinner.isDisplayed()){
                await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
            }
            else{
                await this.driver.pause(3000)
            }
            await this.driver.pause(1000)
            await backButton.waitForDisplayed({timeout: timeOut})
            await backButton.touchAction('tap')
        }
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
export default CompassLateDeliveryAlert