const {remote} = require('webdriverio');

const capabilities = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android',
    'appium:appPackage': 'com.android.settings',
    'appium:appActivity': '.Settings',
};

const wdOpts = {
    host: process.env.APPIUM_HOST || 'localhost',
    port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
    logLevel: 'info',
    capabilities,
};

describe('test', () => {
    describe("in detail", () => {
        it ("should do something", async () => {
            const driver = await remote(wdOpts);
            try {
                const batteryItem = await driver.$('//*[@text="Battery"]');
                await batteryItem.click();
            } finally {
                await driver.pause(1000);
                await driver.deleteSession();
            }
        })
    });
});