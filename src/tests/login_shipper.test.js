import App from "./app"
describe("iOS mobileApp test", () => {
  let app;

  beforeAll(async () => {
    app = new App();
    await app.start();
  });

  afterAll(async () => {
    await app.stop();
  });

test("==001==> TESTING APP INSTALLATION and VERIFY TEST bundleID", async () => {
  await app.driver.pause(2000)
  expect(await app.driver.isAppInstalled("com.shipwell.testflight")).toBe(true);
  await app.driver.queryAppState("com.shipwell.testflight")
  await app.driver.pause(3000)

});
//===============================================
test("==002==> TESTING SHIPPER LAUNGUAGE VIEW LOGIN", async () => {
  await app.languagePage.languageSelectionFlow()
});
//===============================================
test("==003==> TESTING SHIPPER LOGIN FLOW", async () => {
  await app.loginSDPage.loginShipperDispatcher("anurag@shipwell.com", "Kmv!!1234")
});
//===============================================
test("==004==> TESTING SHIPPER COMPASS ALL-OPEN VIEW", async () => {
    await app.compassOpenAlert.compassAllOpenAlert()
});
//===============================================
test("==005==> TESTING SHIPPER COMPASS RUNNING LATE VIEW", async () => {
  await app.compassRunningLateAlert.compassRunningLateAlert()
});
//==============================================
test("==006==> TESTING SHIPPER COMPASS LATE PICK UP VIEW", async () => {
  await app.compassLatePickupAlert.compassLatePickUpAlert()
});
//==============================================
test("==007==> TESTING SHIPPER COMPASS LATE DELIVERY VIEW", async () => {
  await app.compassLateDeliveryAlert.lateDeliveryAlert()
});
//==============================================
test("==008==> TESTING SHIPPER COMPASS NOT TRACKING VIEW", async () => {
  await app.compassNotTrackingAlert.compassNotTrackingAlert()
});
//==============================================
test("==009==> TESTING SHIPPER COMPASS CARRIER NOT ASSIGNED VIEW", async () => {
  await app.compassCarrierNotAssginedAlert.carrierNotAssignedAlert()
});
//==============================================
test("==010==> TESTING SHIPPER COMPASS CARRIER STATUS VIEW", async () => {
  await app.compassCarrierStatusAlert.carrierStatusAlert()
});
//==============================================
test("==011==> TESTING SHIPPER QUICK ACTION and NAVIGATION", async () => {
  await app.quickActionPage.quickAction()
  await app.chatPage.chat()
  await app.docUploadPage.shipmentDocumentUpload()
  await app.internalNotePage.shipmentInternalNotes()
});
//==============================================
test("==012==> TESTING SHIPPER SIDE MENU COMPONENT", async () => {
    await app.sideMenuPage.sideMenu()
});
//==============================================
/*
test("==013==> TESTING SHIPPER SHIPMENT VIEW: ACTIVE AND DELIVERED", async () => {
    await app.shipmentPage.shipment("KCJSG5", 15000)
});
//==============================================
test("==014==> TESTING INBOX: MESSAGES AND NOTIFICATIONS VIEW", async () => {
  await app.inboxPage.inbox()
});*/
});
