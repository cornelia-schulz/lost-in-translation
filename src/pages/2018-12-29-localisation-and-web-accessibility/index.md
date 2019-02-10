---
path: "/2018-12-29-localisation-and-web-accessibility"
title: "Localisation and web accessibility"
date: "2018-12-29"
tags: ["localisation", "localization", "internationalisation", "internationalization", "translation", "globalisation", "globalization", "accessibility", "WAI", "web accessibility", "accessibility guidelines"]
published: true
previous: "/2018-11-03-react-hooks"
next: "/2019-01-11-detecting-user-locales-in-javascript-and-react"
blurb: "Web accessibility means that websites, tools and technologies are designed and developed so that anybody can use them. Read on if you would like to know more about web accessibility and localisation."
image: "/static/wild-muriwai-b7b4909e2cbd1ad596a8318283e57ffe.jpg"
imagetitle: "Evening over Muriwai"
---

# Localisation and web accessibility

Web accessibility means that websites and tools are designed and developed so that anybody even if they have any disabilities can use them. More specifically, people can perceive, understand, navigate, interact with  and contribute to the web. Web accessibility is also beneficial for people without disabilities.

For example, a key principle of web accessibility is designing web sites and software that are flexible
enough to meet different user needs, preferences, and situations. Sometimes such flexibility
also benefits people using a slow internet connection or people with "temporary disabilities", such as a broken arm, and people with changing abilities due to aging.

Internationally, a number of initiatives such as Web Content Accessibility Guidelines (WCAG) have been implemented to develop guidelines for web accessibility to generate content that is usable by everybody.

The WCAG guidelines aim for perceivability, understandability, operability and robustness. Here are some of the things that can be done to improve the accessibility of a website.

## Perceivability

+ Provide captions, text or other alternatives for non-text content.
+ Create content that can be presented in different ways without losing meaning.
+ Make it easier for users to see and hear content.

## Understandability

+ Make text readable and understandable.
+ Make content appear and operate in predictable ways.
+ Help users avoid and correct mistakes.

## Operability

+ Make all functionality available from a keyboard.
+ Make it easy to use inputs other than keyboard.
+ Help users navigate and find content.
+ Give users enough time to read and use content.
+ Do not use content that causes seizures or physical reactions.

## Robustness

+ Content must be robust enough that it can be interpreted reliably by a wide variety tools, including assistive technologies.
+ As technologies and tools evolve, the content should remain accessible at all times.

All these guidelines can be found with detailed descriptions on the [W3 website](https://www.w3.org/WAI/WCAG21/quickref/#ensure-compat "W3 website").

# How does localisation fit into the criterias mentioned above?

## Perceivable

Many websites provide an increasing amount of content that is not text-based, such as images, sound, video and interactive controls. These elements are not perceivable for every user and therefore a text alternative has to be provided. This text alternative can then be presented in a way that they can perceive, that is, auditory (text-to-speech), tactile (Braille) or visual (displayed on the screen) output. When localising accessible web content it is essential to not only to localise the original content, but also to pay special attention to localising the alternatives to that content.

Another perception-related issue is the sequence of the content. If the sequence in which content is
presented to the user influences its meaning, then a correct reading sequence should be available to
screen readers. Reading sequences are not necessarily the same in all languages, so special attention should be paid to correctly localising the reading sequence.

Some websites use background audio to present their content. WCAG recommends that a user has access to versions of speech content in which there is no background audio or the background audio can be turned off. If such content is present, localisation can add dubbed speech in the target language which should work as foreground audio and should be at least 20 decibles louder than the background audio if present.

## Understandable

The key issues for localisation under the understandable principle are related to language identification,
unusual words, reading level, pronunciation, error management and help.

It is important to identify the human language used on a website, so software can correctly handle
language changes and present information to the user. When the language is set correctly screen readers can present the content in that language and search engines will find pages in a user-defined language. During the localisation process the language of the page and language of parts should be clearly defined.

Unusual words and abbreviations can make it difficult for the users to understand the web content and should be defined appropriately. Such unusual words, idioms and jargon should either be avoided or defined. Abbreviations or acronyms should have their meaning or expanded form. These should also be maintained in the localised content.

Generally text should not require a more advanced reading ability than the lower secondary education level as defined in (UNESCO, 1997). If for some reason this is not possible, then the developers should provide an additional version of the text with lower reading ability requirements. This is an important requirement for people with reading difficulties. The reading level of the original content should be maintained during the localisation process.

Labels, instructions and help related to interactive content, such as forms should be clear and precise. This
is a key issue for people with comprehension difficulties as well as screen reader users. Always indicate clearly which form elements are mandatory so that users know what needs to be completed. When localising interactive elements, special attention should be paid to making the localised labels, instructions and help
useful for the intended users.

Web content should prevent errors, identify any mistakes made and, finally, make suggestions to help users to correct errors. When localising the error management content, care should be taken that the correct terminology and formatting of the target language and region are used.

## Operable

The key issues for localisation under the operable principle are related to page titles, focus order, link purpose and headings.

All web pages should be titled. Titles appear in the title bar of the web browser and also appear as the website name when storing bookmarks. When localising a page, special attention should be paid to the page title in order to maintain the information provided by the original version of the content.

Focus order is the order in which the components of a web page receive focus when pressing the tab key. WCAG states that the focus order should preserve meaning and operability to ensure that keyboard users have a similar experience to users of pointing devices. When localising, it is important to bear in mind whether the target language has a different reading order and/or direction than the source language. If it does, localisation specialists should ensure that the focus order does not change the meaning and operability.

Link content (the text and/or image) should clearly indicate where the user will go or what will happen when clicking the link. This is useful for people with cognitive impairments and for people (like blind or deaf-blind people) that use link-based browsing, which only navigates through the links, rather than the full page. When links get localised, special care should be taken to provide adequate information about the purpose of a link.

Overall headings, labels and section headings should clearly represent their purpose, so users can
easily navigate through the structure of a page. This is useful for people using the keyboard or for
people with cognitive impairments. Therefore pay special attention to the descriptions contained in headings, labels and sections when localising a page.

## Conclusion

In conclusion localisation of content is necessary to maintain or increase the accessibility of web content for a wider audience. This will benefit all users and not just users with certain disabilities.
