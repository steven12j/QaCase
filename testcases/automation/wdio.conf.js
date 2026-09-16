export const config = {
    services: ['appium'],
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:app': '...',
        'appium:automationName': 'UiAutomator2'
    }]
}