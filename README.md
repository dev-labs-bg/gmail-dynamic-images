# gmail-images-updater
Gmail caches all external urls. That makes it impossible to read the most recent data of the dynamic images (i.e. votes and other server generated images).

## How it works:

1. The extension works in background mode and it's logic is executed only if the opened tab URL is https://mail.google.com/*
2. In the extension's Option page - you can list all domain names, those you want to enable dynamic images (stop caching).

## Installation
1. Add it directly via [Chrome Web Store](https://chrome.google.com/webstore/detail/gmail-dynamic-images/liagkeaohklpkejapcepbakplhlanade).
2. Or load the [extension as unpacked](https://developer.chrome.com/extensions/getstarted#unpacked).

