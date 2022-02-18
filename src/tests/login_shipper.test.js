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
  expect(await app.driver.isAppInstalled("com.shipwell")).toBe(true);
  await app.driver.launchApp()
  console.log("!!!!!!####%%%%%%!!!! launch worked  !!!!!!####%%%%%%!!!! ")
  await app.driver.queryAppState("com.shipwell")
  await app.driver.pause("5000")

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
test("==004==> TESTING SHIPPER COMPASS VIEW", async () => {
    await app.shipperCompassPage.shipperCompass()
});
//==============================================
test("==005==> TESTING SHIPPER QUICK ACTION and NAVIGATION", async () => {
  await app.quickActionPage.quickAction()
  await app.chatPage.chat()
  await app.docUploadPage.shipmentDocumentUpload()
  await app.internalNotePage.shipmentInternalNotes()
});
//==============================================
test("==006==> TESTING SHIPPER SIDE MENU COMPONENT", async () => {
    await app.sideMenuPage.sideMenu()
});
//==============================================
test("==007==> TESTING SHIPPER SHIPMENT VIEW: ACTIVE AND DELIVERED", async () => {
    await app.shipmentPage.shipment("5RUCFH", 10000)
});
//==============================================
test("==008==> TESTING INBOX: MESSAGES AND NOTIFICATIONS VIEW", async () => {
  await app.inboxPage.inbox()
});
});