---
path: "/2019-01-11-detecting-user-locales-in-react"
title: "Detecting user locales in React"
date: "2019-01-10"
tags: ["localisation", "localization", "internationalisation", "internationalization", "translation", "globalisation", "globalization", "react", "user locales"]
published: true
previous: "/2018-12-29-localisation-and-web-accessibility"
blurb: "If you want to display different content, perhaps in different languages for people from different countries, or display targeted information to visitors from different locations you need to detect the user locale. Read on to find out how."
image: "/static/jacks-lighthouse-0e26eaacdc28a37597e1804e123510ab.jpg"
imagetitle: "Jack's Lighthouse"
---

Detecting the location of your website’s users is useful for a variety of reasons. You might for instance want to display different content, perhaps in different languages for people from different countries, or display targeted information to visitors from different locations. 

## What is a user locale?

A user locale indicates which default settings a user wants to use to format dates, times, currency, and large numbers. The user locale is not the language. The only influence the user locale has on the language is on the names of the days and months. For example, if you use the long date format to display "November 25, 2018," the "November" string will change based on the user locale. When the user locale gets changed, it adds and Input locale with all the default settings for the associated language. Applications and websites should use these settings to present data to the user.

There are different ways to detect a user locale:

  * Geo IP
  * Accept-Language request header
  * Window.navigator object

Geo IP refers to the method of locating a computer's geographic location by identifying its IP address. A lot of websites use Geo IP to guess the location users are visiting from. [IP Location Finder] (https://www.iplocation.net/ "IP Location Finder") is an easy demo for information that can be found. 

This approach can be quite expensive to implement and it is not always accurate either. In today's world people travel a lot, which means their location doesn't necessarily represent their desired locale. 

The Accept-Language request HTTP header provides information about the languages that the user is able to understand and about what locale the user prefers. Browsers set this information based on their user interface language. Users are able to change this but they rarely do.

Using the Accept-Language header is a good starting point for determining the language of the user. Originally the Accept-Language header was intended to specify a user's language. But because a lot of applications also need to know the locale of a user, Accept-Language has been used to determine this information. 

If you use Accept-Language to determine this information, you should give the user an option to override the language and cultural settings if they would like to do so. The information in Accept-Language header might might be out of the user's control if they are travelling and are using an internet cafe or they are borrowing a friend's computer for example.

In React you can easily use the accept-language package. This package extracts user locales from HTTP headers and compares them to the ones you offer on your website. If none of the locales match, then the default locale of your website will be used.

To use the package, install it with npm or yarn:

```
npm install --save accept-language  npm install --save cookie-parser js-cookie
```

Next import the libraries in the server.js file and set it up as follows:

```
import cookieParser from 'cookie-parser';
import acceptLanguage from 'accept-language';

acceptLanguage.languages(['en', 'de']);

const app = express();

app.use(cookieParser());

function detectLocale(req) {
  const cookieLocale = req.cookies.locale;

  return acceptLanguage.get(cookieLocale || req.headers['accept-language']) || 'en';
}
…

app.use((req, res) => {
  const locale = detectLocale(req);
  const componentHTML = ReactDom.renderToString(<App />);

  res.cookie('locale', locale, { maxAge: (new Date() * 0.001) + (365 * 24 * 3600) });
  return res.end(renderHTML(componentHTML));
});
```
In the example both English and German are accepted locales. The detectLocale function looks first for a locale from a cookie and if there is none, it will fetch the information from the Accept-Language header. 

If you just need the user's preferred language, the [window.navigator object] (https://developer.mozilla.org/it/docs/Web/API/NavigatorLanguage/language "window.navigator object") contains a read-only property navigator.language that returns a string representing the preferred language of the user, which tends to be the language of the browser user interface.

```javascript
var lang = window.navigator.language
```


## Conclusion

User locales are useful to answer questions such as:

  * What numeric formats does the user expect?
  * How should dates and times be formatted?
  * What is the user's preferred language?
  * What is the user's time zone?

There are different ways to determine this information, however, none of them are 100% perfect. Whatever way you decide to implement your user locale detection, give the user an option to change it because people borrow from friends or use internet cafes and should be allowed to pick their own preferences.
