# appium jest starter
thanks [@rightsaidjames](https://github.com/rightsaidjames) for trying these steps and the valuable feedback

## with the end in mind
after going through these [steps](#from-scratch), you should have the following:
* a running appium server with UiAutomator2 driver https://appium.github.io/appium/docs/en/2.0/quickstart/
* an Android SDK in the `./sdk` folder
* a node based framework with jest and webdriverio
* that runs all tests with `npm test` and produces a `junit.xml`results file
* running against an emulator (you have started with the Android SDK Tools) with the example app is installed [./apk/lambdatest_proverbial_android.apk](apk)


## run it
with
* Linux or Mac
* Node
* Java

<details>
  <summary>with Linux:</summary>


get this repository
```shell
git clone git@github.com:globalworming/appium-jest-starter.git
cd appium-jest-starter
```

install the dependencies
```shell
npm install
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

accept licenses, install dependencies, a system image, and create a virtual device
```shell
# you might need a different image based on your systems architecture 
# use `sdk/cmdline-tools/tools/bin/sdkmanager --list` to see all
image="system-images;android-33;google_apis;x86_64"
yes | sdk/cmdline-tools/tools/bin/sdkmanager --licenses --sdk_root=sdk
sdk/cmdline-tools/tools/bin/sdkmanager --install "build-tools;33.0.2"  --sdk_root=sdk
echo Y | sdk/cmdline-tools/tools/bin/sdkmanager --install $image  --sdk_root=sdk
sdk/cmdline-tools/tools/bin/sdkmanager --list_installed --sdk_root=sdk
sdk/cmdline-tools/tools/bin/avdmanager --verbose create avd --force --name "car" --package $image --device "automotive_1024p_landscape" 
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

</details>
<details>
  <summary>with Mac:</summary>


get this repository
```shell
git clone git@github.com:globalworming/appium-jest-starter.git
cd appium-jest-starter
```

install the dependencies
```shell
npm install
```

install this driver for appium
```shell
npm run env -- appium driver install uiautomator2
```

get the android sdk tools
```shell
wget https://dl.google.com/android/repository/platform-tools_r34.0.0-darwin.zip -O /tmp/android_sdk.zip
unzip /tmp/android_sdk.zip -d sdk
rm /tmp/android_sdk.zip

wget https://dl.google.com/android/repository/commandlinetools-mac-9477386_latest.zip -O /tmp/commandlinetools.zip
unzip /tmp/commandlinetools.zip -d .
mkdir -p sdk/cmdline-tools
mv cmdline-tools sdk/cmdline-tools/tools
rm /tmp/commandlinetools.zip
mkdir sdk/platforms
```

accept licenses, install dependencies, a system image, and create a virtual device
```shell
# you might need a different image based on your systems architecture 
# use `sdk/cmdline-tools/tools/bin/sdkmanager --list` to see all
image="system-images;android-33;google_apis;arm64-v8a"
yes | sdk/cmdline-tools/tools/bin/sdkmanager --licenses --sdk_root=sdk
sdk/cmdline-tools/tools/bin/sdkmanager --install "build-tools;33.0.2"  --sdk_root=sdk
echo Y | sdk/cmdline-tools/tools/bin/sdkmanager --install $image  --sdk_root=sdk
sdk/cmdline-tools/tools/bin/sdkmanager --list_installed --sdk_root=sdk
sdk/cmdline-tools/tools/bin/avdmanager --verbose create avd --force --name "car" --package $image --device "automotive_1024p_landscape" 
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

</details>

please [let me know](https://github.com/globalworming/appium-jest-starter/issues/new) when you run into issues
