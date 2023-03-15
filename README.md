# appium jest starter

## with the end in mind
after going through these steps, you should have the following:
* a running appium server with UiAutomator2 driver https://appium.github.io/appium/docs/en/2.0/quickstart/
* an Android SDK in the `./sdk` folder
* a node based framework with jest and webdriverio
* that runs all tests with `npm test` and produces a `junit.xml`results file
* running against an emulator (you have started with the Android SDK Tools) where the example app is installed [./apk/lambdatest_proverbial_android.apk](apk/lambdatest_proverbial_android.apk)


## from scratch
with
* Linux
* Node v19.7.0
 
install the dependencies
```shell
npm install --save-dev jest jest-junit appium@next webdriverio appium-uiautomator2-driver
```

install this driver for appium
```shell
npm run env -- appium driver install uiautomator2
```

get the android sdk tools
```shell
wget https://dl.google.com/android/repository/platform-tools_r34.0.0-linux.zip -O /tmp/android_sdk.zip
unzip /tmp/android_sdk.zip -d sdk
rm /tmp/android_sdk.zip

wget https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip -O /tmp/commandlinetools.zip
unzip /tmp/commandlinetools.zip -d .
mkdir -p sdk/cmdline-tools
mv cmdline-tools sdk/cmdline-tools/tools
rm /tmp/commandlinetools.zip
mkdir sdk/platforms
```

accept licenses, install dependencies and a system image
```shell
yes | sdk/cmdline-tools/tools/bin/sdkmanager --licenses --sdk_root=sdk
sdk/cmdline-tools/tools/bin/sdkmanager --install "build-tools;33.0.2"  --sdk_root=sdk
echo Y | sdk/cmdline-tools/tools/bin/sdkmanager --install "system-images;android-33;google_apis;x86_64"  --sdk_root=sdk
sdk/cmdline-tools/tools/bin/sdkmanager --list_installed --sdk_root=sdk
```

create a virtual device
```shell
sdk/cmdline-tools/tools/bin/avdmanager --verbose create avd --force --name "car" --package "system-images;android-33;google_apis;x86_64" --device "automotive_1024p_landscape" 
```

start the emulator
```shell
ANDROID_SDK_ROOT=./sdk/ sdk/emulator/emulator -avd car
```

install the app to use it in your emulator
```shell
sdk/platform-tools/adb install apk/lambdatest_proverbial_android.apk
```

start the appium server
```shell
npm run appium 
```

```shell
npm run test
```

## locating elements
get the appium inspector or use the browser version https://inspector.appiumpro.com/, get the capabilities json from src/first.test.js to connect.
