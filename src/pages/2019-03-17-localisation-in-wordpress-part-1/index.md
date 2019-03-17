---
path: "/2019-03-17-localisation-in-wordpress-part-1"
title: "Localisation in WordPress"
date: "2019-03-17"
tags: ["localisation", "localization", "internationalisation", "internationalization", "translation", "globalisation", "globalization", "challenges", "WordPress", "transposh", "plugin"]
published: false
previous: "/2019-02-10-localisation-into-arabic-part-2"
blurb: "Read on if you are looking for a quick way to translate your WordPress page into another language."
image: "/static/Anzac-Bridge-a1c3997ee3b33d5285e9ef79842763d4.jpg"
imagetitle: "Anzac Bridge in Sydney"
---

# Localisation in WordPress Part 1

Recently I have been looking into how to work with WordPress and I was curious if it is easy to localise your site once you have set up some content in it.

In this blog post I'm looking at how to localise the WordPress interface as well as content. If you are looking for information about how to prepare plugins for internationalisation, have a look at the [WordPress documentation](https://codex.WordPress.org/I18n_for_WordPress_Developers "WordPress documenation"). I will not be covering this in this post.

Localisation happens after internationalisation and is important for everyone who is interested in localising their WordPress site. It's the process during which your theme and content get translated and adapted for a specific market and language.

There are two steps that you might be interested in:

* How to use a localised version of WordPress
* How to translate your content

## How to use a localised version of WordPress

If you haven't installed WordPress yet, simply head over to their site [WordPress.org](https://WordPress.org/ "WordPress.org") and download your localised version of WordPress and unzip it in your preferred installation directory. Normally that's public_html. Then create a database for WordPress on your web server and add a MySQL user with all the necessary privileges. Next edit the wp-config.php file and add your database information. Finally run the WordPress installation by accessing the URL in a web browser.

If you already have WordPress installed and would like to change the language of the user interface, simply log into your dashboard, click on Settings > General, then scroll down to the bottom of your page to Site Language and select the language of your choice from the dropdown.

However, this will only change the language used in the backend of your WordPress site. All the content you have written as well as your theme and any plugins you use will remain in the language you set them up in. To translate content, you require a separate plugin.

## Localisation Plugins

### WeGlot

There are a number of plugins out there. When I looked up plugins, I initially tried out [WeGlot](https://weglot.com/ "WeGlot"), which has a free version available to test the setup. It was very easy to set up and intuitive to use. Once you create an account with WeGlot, they will take you through the setup step by step.

![WeGlot Settings](/static/WeGlot-617c87ced45818c97ecb24716440f5bb.jpg)

One drawback for me was that translations are edited in your WeGlot account rather than directly in WordPress.

![WeGlot Translations](/static/WeGlot1-6354df4218b1cc94d367684e6140a1eb.jpg)

### Polylang

A second plugin I tried was [Polylang](https://en-au.wordpress.org/plugins/polylang/ "Polylang"). The plugin was very easy to set up. Simply install it via the plugins section and activate it. Once installed, you can set up the langauges you would like to localise into.

![Polylang Settings](/static/Polylang-5eaaae877e55100c07bf17ca6caaf24a.jpg)

Here it's important to set up your base language (which in my case was English UK) first. This is especially important if you already have some content in your site. Once you have your base language, you can then add any number of additional languages. Once you set up your languages, you can then easily add the translation of your posts and pages via the editor.

![Polylang Translations](/static/Polylang1-285c7afd3978d1326c3a21bce208e0ea.jpg)

### Transposh

The third plugin I tried was [Transposh](http://transposh.org/ "Transposh"). It took me a little bit longer to set up but once it's set up, it's incredibly easy to use.

To install the plugin, log into your dashboard, click on Plugins > Add New and search for Transposh, then install and activate the plugin. Next click on Transposh and go to the settings to enable the full version of your plugin. To do that simply tick the box at the top of the Settings page and save your change.

![Transposh Settings](/static/transposh1-36ccc23e7a096e5d7caa139a7da5e148.jpg)

To update, simply click on Dashboard and Update. This will notify you that there is a new update for your plugins. Click on Plugins and install the updated version of Transposh.

Next go back to Transposh, click on Languages and click on the languages you would like to localise your site into. Don't forget to save to apply your changes. You can pre-translate into those languages by clicking on Utilities and selecting "Translate All Now". Once you have done that, make sure to proofread those translations as they are machine translations and probably extremely rough. To proofread, we need to enable the widget on the site first. Go to Appearance on your Dashboard and select Widgets, then look for Transposh and select where on your page you would like to show the Widget.

![Transposh Widget](/static/transposh2-f59b22b96aa8665cf8b93e8c767bfe96.jpg)

I added my widget to the footer. Once that's been added, you can then head over to your site and either add or edit the translations. Since I added the widget to the footer, I have to scroll all the way down to the footer and to find "Edit translations" with the flags for the languages I can update.

![Transposh Widget](/static/transposh3-992cd681555b43e226e9cdbee0e25da9.jpg)

Once I click on the language (flag) I want to update I will see a lot of colourful marks on the page which indicate what content can be changed.

![Transposh Widget](/static/transposh4-1339269c47accfefd70d2f573c3176d9.jpg)

Simply click on what you would like to update or add and add your translations. There will most likely be some Google translated hints for you already.

![Transposh Widget](/static/transposh5-886e4c8653a4f644c741a55e44bb12a2.jpg)

Once you are done, click on the tick to save the translation. If you would like to see how many translations have been added, you can do so in the Dashboard by clicking on Transposh and on Translation Editor.

![Transposh Widget](/static/transposh6-19a014835a6d336192931e73959b38d9.jpg)

One thing you probably should check is who can add translations. Go into the Transposh settings and there right at the top you will see some check boxes. By default anybody can edit your translations, which is probably not what you want, so simply check the appropriate check boxes and then save your changes.

## Conclusion

This is just a quick and simple overview on how to get started with localisation in WordPress. There are many more plugins out there. Some are free and some are paid. It's probably worth trying a few out and seeing which one suits your needs best. Have you done any localisation in WordPress? What was your experience? Let me know in the comments.