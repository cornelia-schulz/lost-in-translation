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

Having worked a little with Vue recently, I came across i18next for localisation in Vue. I was curious if it was easy to set up, so I added to a little practice project I have been working on. The repository I used can be found [here](https://github.com/cornelia-schulz/frontend-mentor-huddle-alternating-sections "here") and the actual site is [here](https://hopeful-knuth-d5f28e.netlify.com/ "here").

To get started, use "npm install i18next @panter/vue-i18next" or "yarn add i18next @panter/vue-i18next" to add i18next to your Vue project. Next set up i18next in index.js:

```javascript
import Vue from 'vue'
import i18next from 'i18next'
import VueI18Next from '@panter/vue-i18next'
import App from './App.vue'
import en from './locales/en.json'
import de from './locales/de.json'

const locales = {
  en: en,
  de: de
}

Vue.use(VueI18Next)

i18next.init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: { translation: locales.en },
    de: { translation: locales.de }
  }
})

const i18n = new VueI18Next(i18next)

if (document.getElementById('app')) {
  /* eslint-disable-next-line no-new */
  new Vue({
    el: '#app',
    i18n: i18n,
    render: h => h(App)
  })
}
```

Import i18next and @panter/vue-i18next, then initialise it and set your resources. In my example I set English as my source and fallback language and German as additional language. I decided to store my text in .json files in a "locales" folder. The folder contains one file per language. Both files contain the same keys with text in the corresponding language.

en.json:

```javascript
{
    "message": "hello",
    "tryitfree": "Try it free",
    "readytobuild": "Ready to build your community?"
}
```

And de.json:

```javascript
{
    "message": "hallo",
    "tryitfree": "Probiere es kostenlos",
    "readytobuild": "Bist du bereit, deine Community aufzubauen?"
}
```

Now that we set up i18next and initialised it, we can use it in our various components. To do that simply use ```$t```.

```javascript
<button class="try">
    {{ $t("tryitfree") }}
</button>
```

Last but not least we should give the user an option to change the language using "i18next.changeLanguage". You can find more information about Panter i18next in [the docuentation](https://panter.github.io/vue-i18next/guide/started.html "the documentation").

## Conclusion

The initial set up of the i18next plugin for Vue is very easy to implement. The documentation was straight forward and easy to follow. There are quite a few options that I haven't explored yet but certainly intent to in the near future. Have you used this plugin? What are your experiences?