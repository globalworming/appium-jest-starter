## run this

## from scratch
* Linux
* Node v19.7.0


```shell
npm install --save-dev jest appium@next webdriverio babel-jest @babel/core @babel/preset-env appium-uiautomator2-driver
```
```shell
npm install --save-dev jest appium@next webdriverio appium-uiautomator2-driver
```
```shell
npm run env -- appium driver install uiautomator2
```

```shell
wget https://dl.google.com/android/repository/platform-tools_r34.0.0-linux.zip -O /tmp/android_sdk.zip
unzip /tmp/android_sdk.zip -d sdk
rm /tmp/android_sdk.zip

wget https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip -O /tmp/commandlinetools.zip
unzip /tmp/commandlinetools.zip -d .
mkdir -p sdk/platform-tools/cmdline-tools
mv cmdline-tools sdk/platform-tools/cmdline-tools/latest
rm /tmp/commandlinetools.zip
```
```shell
echo "y" | sdk/platform-tools/cmdline-tools/latest/bin/sdkmanager --install "system-images;android-33;google_apis;x86_64"
```
```shell
sdk/platform-tools/cmdline-tools/latest/bin/avdmanager --verbose create avd --force --name "pixel4" --package "system-images;android-33;google_apis;x86_64" --device "pixel_4"
```

```shell
npm run appium
```
```shell
npm run test
```
