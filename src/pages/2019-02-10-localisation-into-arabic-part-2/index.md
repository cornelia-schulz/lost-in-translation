---
path: "/2019-02-10-localisation-into-arabic-part-2"
title: "Software localisation into Arabic Part 2"
date: "2019-02-10"
tags: ["localisation", "localization", "internationalisation", "internationalization", "translation", "globalisation", "globalization", "challenges", "Arabic"]
published: false
previous: "/2019-02-08-localisation-into-arabic-part-1"
blurb: "Read on if you'd like to find out some more about some of the technical challenges when localising into Arabic."
image: "/static/sydney-harbour-bridge-7b8637c7373dca5edb4df2d1ffcd0d68.jpg"
imagetitle: "Sydney Harbour Bridge"
---

# Software localisation into Arabic Part 2

In my [last blog post](https://www.cornelia-schulz.net/2019-02-08-localisation-into-arabic-part-1 "last blog post") I talked about considerations about what language to choose when localising into Arabic. In this post I'd like to talk more about some technical challenges when localising into Arabic.

Arabic language interfaces present some particular challenges in relation to their visual design. Those challenges range from the obvious issue of the right to left (RTL) layout to other usability considerations related to images, icons and type font and size.

## RTL

The Arabic writing system is bi-directional, cursive, and context dependent. Arabic text runs from right to left (RTL) but numbers and Latin text, such as global brand names are written from left to right (LTR). There are therefore mixed direction of text segments. So when building a search functionality, both Arabic and English text needs to be searchable. It could prove useful to accomodate common spelling mistakes in the search results.

Because Arabic is written right to left, applications will be read from the top right-hand corner and elements on the page need to be aligned to the right-hand side. Research has shown that user behaviour on Arabic sites mirrors the F-shaped reading pattern that is typical of users on English speaking websites. Users start reading in the top right hand corner, scan across the top and then down the right-hand side.

The BBC website is a very good example of the difference in layout between [English](https://www.bbc.com/ "BBC.com website in English") and [Arabic](https://www.bbc.com/arabic "BBC.com website in Arabic").

![Screenshots of the BBC website in English and Arabic](/static/BBC-screenshots-999fcc17793c2d081e088aea41b48b9b.jpg)

## Images

Graphics and icons are also affected by text direction. However logos and icons are a good example of elements that keep their LTR alignment on an RTL website or application. International logos will often stay the same but icons that indicate a direction might change. Tables and charts are typically mirror-imaged horizontally.

You should carefully consider the images you choose to use in your application and how your users will perceive them. Keep in mind the different cultural and social norms and how these norms affect the perception of images you use.

## Font & Text Size

Arabic characters are generally a bit shorter and wider than Latin characters. This means that they take up more space horizontally and they also need a bigger font size to be more readable. So take into account that you generally need at least 30% more space for Arabic text compared to English. You will probably find yourself resizing most dialog boxes in your content.

Arabic script is always cursive, whether handwritten or printed. Because it is cursive, 22 of the letters can take four different shapes depending on their position in a word and the surrounding characters: initial, middle, final or isolated position. The graphic below from [arabicquick.com](http://arabicquick.com/learn-the-arabic-letter-ya/ "arabicquick.com") illustrates the different shapes of the letter ya depending on its position in a word.

![Different shapes of the letter ya in Arabic](/static/ya-fe58c591618cb87686520c7f929e8afa.png)

Upper and lower case do not exist in Arabic. To emphasize or highlight words, use quotation marks. Abbreviations and acronyms are very rarely used. They should be translated in the full form they stand for (For example: RAM should be translated as ذاكرة الوصول العشوائي.

## Numbers

Websites and software applications should support all Arabic regional standards, such as date/time/number/currency/address format and calendar information, as well as sorting and indexing rules. Arabic numerals can be written  in Hindi or Arabic digits.

## Cultural considerations & translation

Many Arabs are Muslims. When you create content, take cultural and religious sensitivity into account (especially in graphics and images). Translators may also have restrictions concerning the content of the material they’re willing to translate. Most Arab countries do not work on Fridays and Saturdays. Their work week begins therefore on Sundays.

Terminology management is extremely important in the localisation process into Arabic. One of the first steps should involve solving the issue of terminology - a glossary should be created. Only experienced Arabic translators with an expert knowledge of the field can accurately create custom Arabic terms which will be understood by your target audience.

## Conclusion

The demand for localising websites and apps into Arabic is increasing. Yet there are many challenges, both of technical and linguistic nature. While researching culture and established standards of web design and usability are a good starting point, you should consider doing user research with real end users in your target markets to create a usable product with a great user experience.