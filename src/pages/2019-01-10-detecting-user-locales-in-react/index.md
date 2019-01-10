---
path: "/2019-01-10-detecting-user-locales-in-react"
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
  * Geolocation API
  * Accept-Language request header

A lot of websites use Geo IP to guess the location users are visiting from. This approach can be quite expensive to implement and it is not always accurate either. In today's world people travel a lot, which means their location doesn't necessarily represent their desired locale. 



Geolocation API is an HTML5 feature that allows a website visitor to share their location with you. The user will see a prompt on the screen asking them if they would like to share their location with your website. If the user chooses not to disclose their location, you won't be able to retrieve the information that way.

```
if ("geolocation" in navigator) {
  // check if geolocation is supported/enabled on current browser
  navigator.geolocation.getCurrentPosition(
   function success(position) {
     // for when getting location is a success
     console.log('latitude', position.coords.latitude, 
                 'longitude', position.coords.longitude);
   },
  function error(error_message) {
    // for when getting location results in an error
    console.error('An error has occured while retrieving
                  location', error_message)
  }  
});
} else {
  // geolocation is not supported
  // get your location some other way
  console.log('geolocation is not enabled on this browser')
}
```
In the example we are first of all checking whether geolocation is enabled or supported by the browser. If it is, you will either receive the data or you will receive an error.



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






What numeric formats does the user expect?
How should dates and times be formatted?
In other cases, other information may be derived from the locale information plus additional knowledge, such as:

Should measurements be metric (centimeters, kilometers, liters) or imperial (inches, miles, gallons)?
What is the user's time zone?
Does the user use Letter size paper, or A4?
What shoe and clothing sizing systems should be used?
What is the user's physical location?

Since none of these are included in the HTTP protocol many web developers have used the Accept-Language header to make inferences about the user's locale.


Some of the potential issues include the following:

Many users never change the defaults for Accept-Language. They are set when the user agent is installed. Unless they are multilingual or have some other reason to adjust language preferences they may not even know such settings exist. Hence, the user may not have ever ratified the Accept-Language setting.
A user agent may send a request that specifies only a language and not a region, for example you may not get a header with de-DE, de-CH or de-AT to indicate German as spoken in Germany, Switzerland or Austria, respectively. On the other hand, you might only get de indicating a preference for German. If you were planning to use the region to decide what currency to use you are now in a bind. Your particular circumstances might allow you to make assumptions such as "Germany has 83 million people, Switzerland has 7 million but only 63% speak German, Austria has 8 million, so this user probably uses the Euro. If we're wrong we'll only offend 4.6% of our German speaking customers or just over 4 million people." Feel free to make such an assumption, if you can accept the risk. Its a lot simpler to ask the user for more information. Also, the math gets more difficult for Spanish or English, for instance.
People borrow machines from friends, they rent them from internet cafes. In these cases the inferred locale may be inappropriate, and care should be taken to allow the user to select the appropriate language and locale from whatever page they are looking at.

