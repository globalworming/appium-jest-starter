const {remote} = require('webdriverio');

const capabilities = {
    "platformName": "Android",
    "appium:automationName": "UiAutomator2",
    "appium:deviceName": "Android",
    "appium:appPackage": "com.lambdatest.proverbial",
    "appium:appActivity": ".MainActivity",
};

const wdOpts = {
    host: process.env.APPIUM_HOST || 'localhost',
    port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
    logLevel: 'info',
    capabilities,
};

let driver = undefined

beforeAll(async () => {
    driver = await remote(wdOpts);
});

afterAll(async () => {
    await driver.deleteSession();
});

// https://github.com/LambdaTest/LT-appium-nodejs-webdriverio/blob/master/specs/android-test.js
describe('Proverbial APK', () => {
    describe("in detail", () => {
        it("should do something", async () => {
            expect(driver).not.toBe(undefined)
            const welcomeMessage = await driver.$("id:Textbox");
            expect(await welcomeMessage.getText()).toBe("Hello! Welcome to lambdatest Sample App called Proverbial")
        })

        it("Changes color", async () => {
            const color = await driver.$("id=color");
            await color.click();
            await color.click();
        });

        it("Changes text", async () => {
            const text = await driver.$("id=Text");
            await text.click();
        });

        it("Toast", async () => {
            const toast = await driver.$("id=toast");
            await toast.click();
        });

        it("Notification", async () => {
            const nf = await driver.$("id=com.lambdatest.proverbial:id/notification");

            await nf.click();
            await driver.$("id=com.android.permissioncontroller:id/permission_allow_button").then(it => it.click());
            await nf.click();
            await driver.openNotifications();
            await driver.$('//android.widget.TextView[@text="Test Notification"]');
            await driver.back();

        });

        it("Geolocation", async () => {
            const geo = await driver.$("id=geoLocation");
            await geo.click();

            await driver.back();
        });

        it("SpeedTest", async () => {
            const st = await driver.$("id=speedTest");
            await st.click();

            await driver.back();
        });
    });
});