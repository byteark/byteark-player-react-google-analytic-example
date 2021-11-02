# Example of ByteArk Player React send event to Google Analytics

This project is an example usage for sending event to google analytic from ByteArk Player React.

## Requirements
* ByteArk Player React v1.0.0-beta14^
* Google Analytics Measurement ID

## Installation

1. Add `gtag` script tag inside `<head>` tag
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

2. Add gtag configuration to your page setup function e.g. `useEffect`
```js
window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'GA_MEASUREMENT_ID');
    window.gtag = gtag;
```

**Send event to Google Analytic**

```js
window.gtag('event', 'ACTION', { metadata });
```

## Read more
- [ByteArk Player React](https://github.com/byteark/byteark-player-react)
- [Send event to Google Analytic](https://developers.google.com/analytics/devguides/collection/gtagjs/sending-data)