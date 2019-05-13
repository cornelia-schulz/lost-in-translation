---
path: "/2019-05-12-localisation-in-vue"
title: "Localisation in Vue with i18next"
date: "2019-05-12"
tags: ["localisation", "localization", "internationalisation", "internationalization", "translation", "globalisation", "globalization", "challenges", "Vue"]
published: false
previous: "/2019-03-17-localisation-in-wordpress-part-1"
blurb: "Do you have a Vue project that you are looking to localise? Then this blog post may be of interest."
image: "/static/mt-cook-18332ec9da480792f0845e41f1a7e083.jpg"
imagetitle: "Mt Cook"
---

## Localisation in Vue with i18next

Having worked a little with Vue recently, I came across i18next for localisation in Vue. I18next is an internationalisation-framework written in and for JavaScript. You can find some more info in their [documentation pages](https://www.i18next.com/ "documentation pages"). 

I was curious if it was easy to set up, so I added to a little practice project I have been working on. The repository I used can be found [here](https://github.com/cornelia-schulz/frontend-mentor-huddle-alternating-sections "here") and the actual site is [here](https://hopeful-knuth-d5f28e.netlify.com/ "here").

To get started, set up a new project with ```vue create app-name```. Then use ```npm install i18next @panter/vue-i18next``` or ```yarn add i18next @panter/vue-i18next``` to add i18next to your Vue project. Next set up i18next in index.js:

index.js
`gist:cornelia-schulz/8027717cd0a5e26df6d3bc0c8ddd57f6#index.js`

Looking at the code in index.js above in detail, we are first importing i18next and @panter/vue-i18next, then we are using ```i18next.init``` to initialise it and set the resources. In my example I set English as my source and fallback language and German as additional language. I decided to store my text in .json files in a "locales" folder. The folder contains one file per language. Both files contain the same keys with text in the corresponding language.

en.json:

`gist:cornelia-schulz/8027717cd0a5e26df6d3bc0c8ddd57f6#en.json`

And de.json:

`gist:cornelia-schulz/8027717cd0a5e26df6d3bc0c8ddd57f6#de.json`

Now that we set up i18next and initialised it, it is available globally in our project and we can use ```$t``` in our various components to import our keys with their translations from the locale.json files into our components. And the great thing is you don't need to import anything else in the components, just use it.

`gist:cornelia-schulz/8027717cd0a5e26df6d3bc0c8ddd57f6#Header.vue`

Last but not least we should give the user an option to change the language using ```i18next.changeLanguage```. You can find more information about Panter i18next in [the documentation](https://panter.github.io/vue-i18next/guide/started.html "the documentation").

## Conclusion

The initial set up of the i18next plugin for Vue is very easy to implement. The documentation was straight forward and easy to follow. There are quite a few options that I haven't explored yet but certainly intend to in the near future. Have you used this plugin? What are your experiences?