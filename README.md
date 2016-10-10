# gmail-images-updater
Gmail caches all external urls. That makes it impossible to read the most recent data of the dynamic images (i.e. votes and other server generated images).

## How it works:

1. The extension works in background mode and it's logic is executed only if the opened tab URL is https://mail.google.com/*
2. In the extension's Option page - you can list all domain names, those you want to enable dynamic images (stop caching).

## Installation
1. Load the [extension as unpacked](https://developer.chrome.com/extensions/getstarted#unpacked), because it's not published to the Chrome Extensions store.

