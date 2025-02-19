# Notifee Notification Issue with Expo SDK 51 and expo-updates

## Issue Description

When using Notifee with Expo SDK 51 and having `expo-updates` installed, there is an issue where clicking on a notification does not open the application when the app is in a killed state (not running in background or foreground).

## Environment

-   Expo SDK: 51
-   expo-updates: ~0.25.28
-   @notifee/react-native: ^9.1.8
-   React Native: 0.74.5
-   Platform: Android

## Steps to Reproduce

1. Clone this repository
2. Install dependencies:
    ```bash
    yarn install
    ```
3. Build and install the Android app in release mode:
    ```bash
    yarn android --variant release
    ```
4. Launch the app once and close it
5. Notification will be triggered in 5 seconds
6. Force close the application (ensure it's completely killed, not in background)
7. Click on the notification

## Video


https://github.com/user-attachments/assets/300c950d-7a64-4e87-aba8-e2b7de315d0d



## Expected Behavior

The application should open when clicking on the notification, even when the app is in a killed state.

## Actual Behavior

The application does not open when clicking on the notification while the app is in a killed state.

## Additional Notes

-   This issue specifically occurs when `expo-updates` is installed in the project
-   The issue is reproducible on Android devices
-   Notifications work correctly when the app is in the background or foreground
-   The issue only manifests when the app is completely killed

## Workaround

Currently, there is no known workaround for this issue. This appears to be a compatibility issue between Notifee, Expo SDK 51, and expo-updates.

## Minimal Reproduction Repository

This repository contains a minimal reproduction of the issue. You can use it to verify and test the problem.

To test:

1. Clone this repository
2. Install dependencies with `yarn install`
3. Build the Android app with `yarn android --variant release`
4. Follow the steps in the "Steps to Reproduce" section above
