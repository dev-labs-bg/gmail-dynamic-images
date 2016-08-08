# gmail-images-updater

## Installation
1. Load the [extension as unpacked](https://developer.chrome.com/extensions/getstarted#unpacked), because it's not published to the Chrome Extensions store.

## How it works
1. The extension is executed only if the opened tab URL is https://mail.google.com/*
2. There is an observer object `MutationObserver`, that checks for DOM manipulations and if there are then the extension updates all cached images.
* With the Observer implementation we catch most of the possible corner cases. 

## Notes
1. Currently it updates images, those URLs include 'updates.devlabs.bg'. Soon it will be configurable by [Option page](https://developer.chrome.com/extensions/options).
