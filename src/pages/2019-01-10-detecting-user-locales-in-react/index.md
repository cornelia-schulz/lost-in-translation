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



There are two ways to detect a user locale:

  * Geo IP
  * Accept-Language request header

A lot of websites use Geo IP to guess the location users are visiting from. This approach can be quite expensive to implement and it is not always accurate either. In today's world people travel a lot, which means their location doesn't necessarily represent their desired locale. Therefore a second method is 





Using the Accept-Language header is also a good starting point for determining the language of the user, rather than the locale, but even then you must know its limitations and give the user some way to override the assumptions you make. Many of the potential issues listed above apply here too.








What numeric formats does the user expect?
How should dates and times be formatted?
In other cases, other information may be derived from the locale information plus additional knowledge, such as:

Should measurements be metric (centimeters, kilometers, liters) or imperial (inches, miles, gallons)?
What is the user's time zone?
Does the user use Letter size paper, or A4?
What shoe and clothing sizing systems should be used?
What is the user's physical location?

Since none of these are included in the HTTP protocol many web developers have used the Accept-Language header to make inferences about the user's locale.

The Accept-Language header is information about the user's language preferences that is passed via HTTP when a document is requested. Mainstream browsers allow these language preferences to be modified by the user. The value itself is a defined by BCP 47, typically as a two or three letter language code (eg. fr for French), followed by optional subcodes representing such things as country (eg. fr-CA represents French as spoken in Canada).

The question is about whether this information is appropriate for determining the locale of the user.

The HTTP Accept-Language header was originally only intended to specify the user's language. However, since many applications need to know the locale of the user, common practice has used Accept-Language to determine this information. It is not a good idea to use the HTTP Accept-Language header alone to determine the locale of the user. If you use Accept-Language exclusively, you may handcuff the user into a set of choices not to his liking.

For a first contact, using the Accept-Language value to infer regional settings may be a good starting point, but be sure to allow them to change the language as needed and specify their cultural settings more exactly if necessary. Store the results in a database or a cookie for later visits.

Some of the potential issues include the following:

Many users never change the defaults for Accept-Language. They are set when the user agent is installed. Unless they are multilingual or have some other reason to adjust language preferences they may not even know such settings exist. Hence, the user may not have ever ratified the Accept-Language setting.
A user agent may send a request that specifies only a language and not a region, for example you may not get a header with de-DE, de-CH or de-AT to indicate German as spoken in Germany, Switzerland or Austria, respectively. On the other hand, you might only get de indicating a preference for German. If you were planning to use the region to decide what currency to use you are now in a bind. Your particular circumstances might allow you to make assumptions such as "Germany has 83 million people, Switzerland has 7 million but only 63% speak German, Austria has 8 million, so this user probably uses the Euro. If we're wrong we'll only offend 4.6% of our German speaking customers or just over 4 million people." Feel free to make such an assumption, if you can accept the risk. Its a lot simpler to ask the user for more information. Also, the math gets more difficult for Spanish or English, for instance.
People borrow machines from friends, they rent them from internet cafes. In these cases the inferred locale may be inappropriate, and care should be taken to allow the user to select the appropriate language and locale from whatever page they are looking at.