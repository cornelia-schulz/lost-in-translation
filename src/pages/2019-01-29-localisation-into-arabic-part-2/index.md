---
path: "/2019-01-29-software-localisation-into-arabic-part-2"
title: "Software localisation into Arabic"
date: "2019-01-29"
tags: ["localisation", "localization", "internationalisation", "internationalization", "translation", "globalisation", "globalization", "challenges", "Arabic"]
published: false
previous: "/2019-01-24-localisation-into-arabic-part-1"
blurb: "Read on to find out about things to consider when you are localising a website into Arabic."
image: "/static/"
imagetitle: ""
---

But when it comes to search functionality, incorporating both Arabic and English is often a usability necessity.

Users looking for a specific product on an e-commerce site will use the product name that’s most familiar to them. And more often than not, that brand name will be in English.

Make sure your search results accommodate for spelling mistakes. You can do this by either taking into account common spelling mistakes and providing the search results you think users are looking for, suggesting alternate search keywords that could be what they wanted to enter or including predictive text in the search field.

Visual Design in Arabic Interfaces
Arabic language interfaces also bring with them particular challenges in relation to their visual design.

From the obvious issue of the Right to Left (RTL) layout to other usability considerations related to images, icons and type font and size.

The Arabic writing system is bi-directional, cursive, and context dependent.

Directionality
Arabic text runs from right to left (RTL) but numbers and Latin text are written from left to right (LTR). This leads to a mixed direction of text segments.

Furthermore, as Arabic is written from right to left, printed documents or screen applications are read from the top right-hand corner. This characteristic has implications on the way information should be presented and laid out on the page or screen. Graphics and icons are also affected by text direction. In an Arabic graphical user interface even the layout of items such as tables and charts are typically mirror-imaged on the horizontal plane.


Right to Left (RTL) Layout
Because Arabic is written right to left, Arabic websites and products are designed with the elements of the page aligned to the right-hand side.

Research from NNg as well as our own eye-tracking studies at UXBERT has shown us that user behavior on Arabic sites mirrors the F-shaped reading pattern typical of users on English language websites.

Users on Arabic language sites start from the top right corner of the page, scan across the top and then scan down the right-hand side of the content.

However, while user behavior on RTL websites is a mirror of LTR websites, it doesn’t necessarily follow that designing an Arabic language interface is simply a question of mirroring every element of the site.

Logos and icons are a good example of elements that should sometimes keep their LTR alignment on RTL websites. If your users have a degree of familiarity with a particular logo or icon, then it makes sense to keep the same orientation to make recognition easier.

When determining whether the orientation of an icon should be mirrored or kept the same, consider whether there is a user expectation for the icon to look a certain way. Also, think about whether changing the icon’s alignment has an effect on the metaphor it’s communicating.

LTR Text in a RTL Website
Another consideration that often comes up is how you should align LTR text on Arabic websites. This can apply to text labels (in menus or above input fields) as well as when inputting text into forms.

The issue arises when there is no Arabic word for the required label or input. Even if there is a direct translation, users may be more familiar with the English word within the context of the interaction in question. The same thing happens when dealing with numbers, specific names or abbreviations which are written in Latin script meaning they’ll also be read LTR.

Images
You need to put real thought into the images you choose to use and how your users will perceive them. And if you’re targeting Arab users, you need to keep in mind their different cultural and social norms and how these norms affect the perception of images you use.

For example, if your target users are males in Saudi Arabia, you’d want to use images of men who look like Saudis. This could mean that they’re wearing the traditional thawb.

Sounds simple, but it’s a great example of how not having the correct cultural understanding could backfire. To the untrained eye, the thawb is something that all Arab men wear; but the reality is each country in the region has their own version of it. So if you want to create the desired effect of your user identifying with the image, you need to make sure that you’ve got all the details right.

Font & Text Size
Arabic characters tend to be shorter and wider than Latin characters. This means that they take up more space horizontally while not being particularly readable when using the same text size as an English version.

It’s common that Arabic type is often set 4 points larger than corresponding English type in order to achieve the same degree of legibility. Therefore, when designing the layout of your interface, you’ll have to take into account the necessary space requirements for your copy.

Character shaping
The Arabic alphabet has 28 letters which all correspond to consonants. Arabic script is always cursive, whether handwritten or printed.

Because the Arabic script is cursive, twenty two of the letters can take four different shapes depending on their position in a word and the surrounding characters. Whether the letters are in initial, medial, final or isolated position, they will take on different shapes.

Upper and lower case do not exist in Arabic, and abbreviations and acronyms are rarely used.

Diacritics
In Arabic, vowels are represented by signs above or below characters. These signs are called diacritics. There are 8 main diacritics in Arabic. There are single or double diacritics. They change the pronunciation and may change the meaning or tense. They can also help differentiate between words of similar spelling. The use of diacritical marks is optional in written standard Arabic, while they are generally present in the Qur’an or in religious texts. They are also used in teaching children to read. The positioning of diacritics can be affected by ligatures.

Numerals and dates
Numbering formats vary depending on the region. Arabic numerals may be represented by either Hindi digits or Arabic digits. North Africans use the Arabic digits, which are the same as the ten signs used in the European numbering systems, while in the Middle East, the Hindi digits are used. In both cases, numbers are written from left to right. Both the Western (Gregorian) and the Islamic lunar (Hijri) calendar systems are used in Arabic countries. Western and Islamic months’ names can both be written in Latin or in Arabic scripts.

Justification
Justification in documents with latin text is done by inserting spaces between words. In Arabic, justification is achieved by stretching the last letter of certain words in a line. This stretching is called a Kashida or Keshide (Persian for ‘to
extend’) and looks like a horizontal connecting line.

Punctuation
In Modern Standard Arabic, punctuation is commonly used, although it is less standardized than in other languages, as English or French. While the exclamation mark, period, and colon are similar in both Arabic and English, the
question mark, comma, and semi-colon are displayed differently. The question mark in Arabic is reversed and faces rightwards. Commas can be used to separate long sentences in Arabic and are also reversed. Semi colons also face
inwards.

Terminology management is essential in the localization process into Arabic. One of the first steps for any arabization of scientific and technical data should involve solving the issue of terminology. Only an experienced Arabic translator with an expert knowledge of the field can accurately create custom Arabic terms which will be understood by your target market. Furthermore, when necessary, a glossary, describing the source terms, can be created for the reader.

Cultural considerations
The wide majority of Arabs are Muslims. Cultural and religious sensitivity must be taken into account (especially in graphics and images). Translators may also have restrictions concerning the content of the material they’re willing to translate.
Most Arab countries do not work on Fridays and Saturdays. Their work week begins therefore on Sundays.

Character encoding
The software should be able to display Arabic characters as well as receive Arabic input from users. It is highly recommended to use Unicode.

Text expansion
Translation into Arabic generates approximately a 30% text expansion. The software designer should leave enough space to allow for text expansion. A resizing of most dialog boxes is necessary.

Regional Standards
Software applications should support Arabic regional standards as date/time/number/currency/address format and calendar information, as well as sorting and indexing rules.

Search and Replace
There are special search options that are specific to BiDi languages (for example, Hamza, a sign in Arabic orthography used to represent the sound of a glottal stop, transliterated in English as an apostrophe.

Acronyms should be translated in the full form they stand for (For example: RAM should
be translated as ذاكرة الوصول العشوائي .(If there's no enough space to do, acronyms can be
left in English.

As there's no capitalization in Arabic, English capitalized words can be translated
between quotations in order to highlight them. 

Conclusion
As the Western world realizes the size and value of the Arabic Market, the demand for localizing in Arabic is increasing. However there are many challenges in localizing in Arabic.
The characteristics of the Arabic language can raise issues in translation and desktop publishing.
Arabic lacks equivalents for many technology and business terms. Terminology management is therefore a major aspect of localization in Arabic. It is necessary to choose the right localization partner who can provide you with experienced translators and manage your terminology.

While academic theories about culture and established standards of web design and usability are a good starting point for designing for Arab users, the only way to really create usable products that deliver a great user experience is through user research with real users on the ground.