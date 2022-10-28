class ShipperOnboardingPage{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    
    async onboardingNextButton(){
        return await this.element('~Next')
    }
    async onboardingManageAllYourShipment(){
        return await this.element('~Manage All of Your Shipments')
    }
    async onboardingMessagesAndNotifications(){
        return await this.element('~Messages and Notifications')
    }
    async onboardingEnablePushNotification(){
        return await this.element('~Enable Push Notifications')
    }
    async onboardingPermissionModalAllowButton(){
        return await this.element('~Allow')
    }
    async shipwellSpinner(){
        return await this.element('~ShipwellSpinner')
    }

    async shipperOnboarding(timeOut=60000){
        const onboardingNextButton= await this.onboardingNextButton()
        const onboardingManageAllYourShipment= await this.onboardingManageAllYourShipment()
        const onboardingMessagesAndNotifications= await this.onboardingMessagesAndNotifications()
        const onboardingEnablePushNotification= await this.onboardingEnablePushNotification()
        const onboardingPermissionModalAllowButton= await this.onboardingPermissionModalAllowButton()
        const shipwellSpinner= await this.shipwellSpinner()

        await this.driver.pause(5000)
        if (await shipwellSpinner.isDisplayed()){
            await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
        }
        await onboardingManageAllYourShipment.waitForDisplayed({ timeout: timeOut })
        await onboardingNextButton.waitForDisplayed({ timeout: timeOut })
        await onboardingNextButton.touchAction("tap")
        await this.driver.pause(5000)
        if (await shipwellSpinner.isDisplayed()){
            await shipwellSpinner.waitForDisplayed({timeout: timeOut, reverse: true})
        }
        await this.driver.pause(1000)
        await onboardingMessagesAndNotifications.waitForDisplayed({ timeout: timeOut })
        await onboardingEnablePushNotification.waitForDisplayed({ timeout: timeOut })
        await onboardingEnablePushNotification.touchAction("tap")
        await onboardingPermissionModalAllowButton.waitForDisplayed({ timeout: timeOut })
        await onboardingPermissionModalAllowButton.touchAction("tap")
        await this.driver.pause(2000)
    }

}

export default ShipperOnboardingPage;