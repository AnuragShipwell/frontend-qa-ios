class DispatcherOnboardingPage{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    
    async onboardingFindMoreLoads(){
        return await this.element('~Find More Loads')
    }
    async onboardingNextButton(){
        return await this.element('~Next')
    }
    async onboardingManageYourAssets(){
        return await this.element('~Manage Your Assets')
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

    async dispatcherOnboarding(){
        const onboardingFindMoreLoads= await this.onboardingFindMoreLoads()
        const onboardingNextButton= await this.onboardingNextButton()
        const onboardingManageYourAssets= await this.onboardingManageYourAssets()
        const onboardingManageAllYourShipment= await this.onboardingManageAllYourShipment()
        const onboardingMessagesAndNotifications= await this.onboardingMessagesAndNotifications()
        const onboardingEnablePushNotification= await this.onboardingEnablePushNotification()
        const onboardingPermissionModalAllowButton= await this.onboardingPermissionModalAllowButton()
        await this.driver.pause(1000)
        await onboardingFindMoreLoads.waitForExist({ timeout: 5000 })
        await onboardingFindMoreLoads.waitForDisplayed({ timeout: 5000 })
        await onboardingNextButton.waitForDisplayed({ timeout: 5000 })
        await onboardingNextButton.waitForEnabled({ timeout: 5000 })
        await onboardingNextButton.touchAction("tap")

        await this.driver.pause(1000)
        await onboardingManageYourAssets.waitForExist({ timeout: 5000 })
        await onboardingManageYourAssets.waitForDisplayed({ timeout: 5000 })
        await onboardingNextButton.waitForDisplayed({ timeout: 5000 })
        await onboardingNextButton.waitForEnabled({ timeout: 5000 })
        await onboardingNextButton.touchAction("tap")

        await this.driver.pause(1000)
        await onboardingManageAllYourShipment.waitForExist({ timeout: 5000 })
        await onboardingManageAllYourShipment.waitForDisplayed({ timeout: 5000 })
        await onboardingNextButton.waitForDisplayed({ timeout: 5000 })
        await onboardingNextButton.waitForEnabled({ timeout: 5000 })
        await onboardingNextButton.touchAction("tap")

        await this.driver.pause(1000)
        await onboardingMessagesAndNotifications.waitForExist({ timeout: 5000 })
        await onboardingMessagesAndNotifications.waitForDisplayed({ timeout: 5000 })
        await onboardingEnablePushNotification.waitForDisplayed({ timeout: 5000 })
        await onboardingEnablePushNotification.waitForEnabled({ timeout: 5000 })
        await onboardingEnablePushNotification.touchAction("tap")
        
        await onboardingPermissionModalAllowButton.waitForDisplayed({ timeout: 5000 })
        await onboardingPermissionModalAllowButton.waitForEnabled({ timeout: 5000 })
        await onboardingPermissionModalAllowButton.touchAction("tap")
        await this.driver.pause(1000)
    }

}

export default DispatcherOnboardingPage;