# superapp-with-repackv3

This is a React Native project configured with lerna.

## How to build and run this project

Run these commands from the root directory

```
yarn
npx lerna bootstrap
```


Run these commands from `packages/MainApp` directory
Same for `MicroApp1` and `MicroApp2`

```
cd packages/MainApp/ios
pod install

cd .. //Navigate back to packages/MainApp
yarn start //Run metro w Webpack => do it for MicroApp1 and MicroApp2 also
yarn run ios //Run project on iOS simulator

```

ISSUE ANDROID: android can not use localhost so run it
```
adb reverse tcp:9001 tcp:9001; adb reverse tcp:9000 tcp:9000 ; adb reverse tcp:8081 tcp:8081
```