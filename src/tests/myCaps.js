let myCaps = {
    capabilities: {
    platformName: "iOS",
    automationName: "XCUITest",
    deviceName: "iPhone 11 Pro",
    //udid: "DFE54EFA-7E40-458B-8FC7-9704D435A575",
    udid: process.env.BITRISE_IPHONE_UDID,
    //app: "/Users/anuragshipwell/Library/Developer/Xcode/DerivedData/Shipwell-akdpitrjnzikizcqiclbkartdtln/Build/Products/Debug-iphonesimulator/Shipwell.app",
    app: process.env.BITRISE_APP_DIR_PATH,
    xcodeOrgId: "NMS56SGZ6U",
    xcodeSigningId: "iPhone Developer",
    noReset: "false",
    fullReset: "true"
    },
    connectionRetryTimeout: 240000,
    //host: process.env.HOST|| "0.0.0.0"
    host: "0.0.0.0",
    port: 4723,
    path: "/wd/hub",
  }
  export default myCaps;

  //a570f7f5-fb8c-4955-9872-b46e97314452
  //