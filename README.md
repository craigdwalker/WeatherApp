# Intro

This app is built using React Native and is supported on the iOS and Android mobile platforms. It provides the user with a view of the weather in their current location, a 5-day forecast of weather in the same location, along with the ability for a user to search for a specific location, and save it if they so wish to.

The user is required to provide permission for access to their location in order provide accurate weather data. If permission is not granted, or communication with the OpenWeatherAPI fails, then an error message will be displayed. During communication with the OpenWeatherAPI, a loading spinner will be displayed.

The weather data displayed in the app is sourced from [OpenWeatherAPI](https://openweathermap.org/api). The icons displayed in the app are sourced from [Google Fonts Icons](https://fonts.google.com/icons).

## Prerequisites

### Repository access

- A GitHub account
- An OpenWeatherAPI access token (this will be provided by the repository owner)

### Tooling
- [Node.js](https://nodejs.org) - Node v20.2.0
- [npm](Recommended: Use [nvm](https://github.com/nvm-sh/nvm)) - NPM 9.6.6
- [Watchman](https://facebook.github.io/watchman) - 2023.05.22.00
- [Xcode](https://developer.apple.com/xcode) - Xcode 14.3.1
- [Cocoapods](https://cocoapods.org) - 1.10.1
- [Android Studio and Android SDK](https://developer.android.com/studio) - Android Studio Flamingo | 2022.2.1 Patch 1
- [React Native / CLI] - react-native-cli: 2.0.1, react-native: 0.71.8

*Please note, newer versions of the above may work but have not been tested.*

## Cloning the repository

### Using Git

1. Via the command line, enter `git clone https://github.com/craigdwalker/WeatherApp.git`
2. Enter your GitHub username, when prompted
3. Enter your GitHub password, when prompted

## Installing the app

1. Run `npm install` via the command line

### iOS

From the root of the project:

1. Via the command line, navigate to the ios folder (using `cd ios`)
2. Enter `pod install`
3. Return to root of the project (using `cd ..`)

## Launching the app

1. Via the commad line, run `npm start`
2. When presented with the options, select `i` for iOS or select `a` for Android

## Running unit tests

* Via the command, run `npm test`

## Device Testing

The app has been tested on the following devices:

iOS - iPhone SE (3rd Gen), iOS 16 (Simulator)
Android - Samsung Galaxy S20, Android  (Device)

*Please note, alternative devices / OS versions have not been tested so use at your own risk.*
