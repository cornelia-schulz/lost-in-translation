---
path: "/language-hierarchies"
title: "Language Hierarchies"
date: "2018-09-13"
tags: ["localisation", "localization", "language hierarchies", "internationalization", "translation", "regional", "cultures", "hierarchy"]
published: true
previous: "/machine-translations"
next: "/localisation-With-I18next"
blurb: "Have you come across different versions of a language and wondered how to incorporate these versions into your software with a minimum amount of effort?"
image: "https://farm2.staticflickr.com/1843/44541228262_fa33c19e2f_k.jpg"
imagetitle: "Tongariro Evening"
---

![City reflections](https://farm2.staticflickr.com/1843/44541228262_fa33c19e2f_k.jpg)


When working with languages you will probably come across culture specific languages such as German spoken in Germany, German spoken in Austria or Swiss German. It makes sense to organise your translated files in such a way that your German speaking customers only ever see German. However, if you are missing translations for a specific software string, it is good practise to fall back to your default culture and not show your customers that a string is missing or not show them anything at all.

We can use language hierarchies to organise these fall-backs. But what's the best way to organise yourself?

## Have a base language

At the top of language hierarchies you always have a base language. A base language is the language your company operates in or writes all their content in. You will always have strings available in this langauge and it is the source language for all your translations.

## Keep translations neutral

Below the base language you have your culture neutral resource files. A neutral culture is associated with a language but not a country or region. For example French (fr) or German (de) are neutral language codes because they don't specify the country where the language is spoken in. It is best practise to store most of your translations in such a culture neutral file.

## Then add some specifics

Of course you want to make sure that your translations read completely natural to your customers in all your target markets. So there will be country or region specific terms for some words. These should be stored in culture specific resource files. A specific culture is associated with a language and a country or region. For example German from Germany is de-DE, Canadian French is fr-CA, etc.

Organising your language resource files according to specificity and creating language hierarchies is a good way to ensure that you don't show any blank spaces or missing strings. It also means you don't need to store a huge amount of strings twice or more times for every single market.

Having read a bit about the theory, how do you organise language hierarchies? Feel free to share your thoughts in the comments section.
