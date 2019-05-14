---
path: "/2018-10-07-localisation-With-I18next"
title: "Localisation in React with I18next"
date: "2018-10-07"
tags: ["localisation", "localization", "internationalisation", "internationalization", "translation", "i18next", "react-i18next", "strings"]
published: true
previous: "/2018-09-13-language-hierarchies"
next: "/2018-10-20-I18next-testing-with-Jest"
blurb: "If you are looking for a way to get set up quickly to show content in more than one language in React, you might like i18next, a great internationalisation framework for JavaScript."
image: "/static/lake-taupo-evening-e25da1c466502f4dbc0f0a5fbf1691a0.jpg"
imagetitle: "View from Lake Taupo"
---

# Localisation in React with I18next

Recently I participated in the pretty awesome Dev Academy Web Developer bootcamp to learn React and fullstack development and I enjoyed that immensely. I asked myself what's a good way to localise content in React applications? After some googling I came across [i-18next](https://www.i18next.com/ "i18next documentation") and more specifically [react-i18next](https://github.com/i18next/react-i18next "react-i18next documentation").

I18next is an internationalisation framework and provides a lot of functionalities, such as pluralisation "out of the box". I thought I'd give it a try to see how easily it integrates with an existing application which I have been using to practise my React skills. The application is called Photo Locations and the code can be found on [Github](https://github.com/cornelia-schulz/photolocations "Photo Locations on Github") .

To get started, I used yarn to install the following packages:

```javascript
yarn add react-i18next i18next i18next-browser-languagedetector i18next-xhr-backend
```

In my application I use webpack and I found the following package extremely helpful too:

```javascript
yarn add -d @alienfast/i18next-loader
```

Next I added the following lines to the modules section my webpack config to configure i18next-loader:

```javascript
{
  test: /locales/,
  loader: '@alienfast/i18next-loader',
  // options here
  //query: { overrides: [ '../node_modules/lib/locales' ] }
}
```

Once that was done, it was time to initialise i18next and to configure where I wanted to store my language string files. To do that I created an i18n.js file in my client directory.

```javascript
import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { reactI18nextModule } from 'react-i18next'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['strings'],
    defaultNS: 'strings',

    debug: true,

    interpolation: {
      escapeValue: false,
    },

    react: {
      wait: true
    }
  })

export default i18n

```

In the file I specified that I am going to store my translations in a file named strings. It is good practise to use the same file name for all your languages and store them in differnt folders based on their locale or language code. That's what I did next.

To set up some text I created a folder called locales in my public folder which contains other static assets, such as images or CSS files. Within the locales folder I set up two languages for now, German (de) and my base language English (en).

In each language folder I then created a file called strings.json. All text will now be stored in these files in a simple json key:value structure. To make it easeier to see where my individual strings are being used, I created a json object for each individual component:

locales/en/strings.json

```javascript
{
  "header": {
    "home": "Home",
    "about": "About",
    "contact": "Contact"
  },
  "contact": {
    "contact_header": "Get in touch!",
    "name": "Your name:",
    "email": "Your email:",
    "message": "Your message:",
    "send": "Send"
  }
}

```

locales/de/strings.json

```javascript
{
  "header": {
    "home": "Start",
    "about": "Über",
    "contact": "Kontakt"
  },
  "contact": {
    "contact_header": "Schicke eine Nachricht",
    "name": "Dein Name:",
    "email": "Deine E-Mail:",
    "message": "Deine Nachricht:",
    "send": "Senden"
  }
}
```

As you can see in my two little examples above, both the English and the German json files contain the same keys on the left hand side, which I will be using to load the translations onto my pages from my components.

But before I could use the keys in the component, I had to import i18next into my index.js file and include it in the render method:

```javascript
import i18n from './i18n'

document.addEventListener ('DOMContentLoaded', () => {
  render (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nextProvider>
    </Provider>,
    document.getElementById ('app')
  )
})
```

Next I added "withNamespaces" to my App.jsx file and included it in the export, so other components have access to i18n via their props.

```javascript
import { withNamespaces } from 'react-i18next'
class App extends React.Component {
  ...
}
export default withNamespaces('strings')(App)
```

Once that was done, I could call i18next from my components to actually display my content in both English and German. In my example here I'm looking at the Header.jsx file. First I imported I18n at the top of my file. Then I wrapped the content of my render section into an <I18> tag. Next I simply used {t('key.from.json.file')} wherever I had some text:

```javascript
import { withNamespaces } from 'react-i18next'
import i18n from 'i18next'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.changeLanguage = this.changeLanguage.bind(this)
  }

  changeLanguage(language) {
    i18n.changeLanguage(language)
    this.props.setLanguage(language)
  }

  render() {
    let { t, i18n } = this.props
    return (
      <header>
        <nav className="navbar" role="navigation">
          <div className="logo header  header-left">
            <img src="/images/Logo.PNG" alt="Photo Locations" />
          </div>
          <div className="languages">
          <button className="button language" onClick={() => this.changeLanguage('de')}>{t('languages.de')}</button>
          <button className="button language" onClick={() => this.changeLanguage('en')}>{t('languages.en')}</button>
          </div>
          <div className="header">
            <Route exact path='/' component={Search} />
          </div>
          <div className="dropdown header">
            <button className="dropbtn" onClick={this.toggleVisibility}>
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/">{t('header.home')}</Link>
              <Link to="/about">{t('header.about')}</Link>
              <Link to="/contact">{t('header.contact')}</Link>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setLanguage: (language) => {
      return dispatch(setLanguage(language))
    }
  }
}

export default withNamespaces('strings')(connect (null, mapDispatchToProps)(Header))
```

To quickly test the functionality of changing the language I added some buttons, which will be integrated into the menu later on. The full code can be found on [Github](https://github.com/cornelia-schulz/photolocations "Photo Locations on Github") .

All in all I just loved how straight forward it was to get going with I18n and I will certainly explore this component more as I'd love to be able to show off my newly learned React skills to my family in Germany as well.