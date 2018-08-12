---
path: "/machine-translations"
title: "Machine translations"
date: "2018-08-08"
tags: ["machine translation", "RBTM", "SMT", "rule based", "statistical machine translation"]
published: true
previous: "/glossaries-and-translation-memories"
blurb: "Almost everyone probably has heard of services such as Google Translate. Machine translation is the technical term for any computerised translation service."
image: "https://farm5.staticflickr.com/4074/35689778056_bc31f34a23_b.jpg"
imagetitle: "Cornwallis"
---
![Cornwallis](https://farm5.staticflickr.com/4074/35689778056_bc31f34a23_b.jpg)

Almost everyone probably has heard of services such as Google Translate. Machine translation is the technical term for any computerised translation service. On a very basic level machine translation works by a simple substitution of words in one language for words in another. It is not quite an alternative to human translation yet as the following lines will show.

First serious attempts of automated or machine translation were made in the 1950s with rule based systems (RBTM), which combined a number of grammatical rules and dictionaries. The big wave of research occurred in the 1980s when an increased amount of content needing translation inspired statistical machine translation (SMT). This method is based on large volumes of analysed data for specific language combinations. Statistical machine translations were used by the German computer scientist Franz Joseph Och to develop Google translate in the early 2000s.

Since 2007, SMT and SMT-RBTM hybrids were used to build sophisticated translation platforms. One example is "Moses", a statistical machine translation system funded by the European Commission. The system was trained by passing it a collection of translated texts and once trained the system quickly found the highest-probability translation with the help of an efficient search algorithm. However, all of those systems still needed a lot of human editing.

Simultaneously, the industry developed less ambitious computer-assisted translation tools (CAT-tools), which can handle a lot of different file formats. These can also be combined with machine translation options. The translation memories and glossaries that these tools generate speed up the translation process enormously, especially for repetitive texts and updates and provide an easier terminology management and better quality control. 

The newest development in terms of machine translation is neural machine translation (NMT) or deep neural machine translation. Like statistical machine translation, the system starts by learning from a variety of translated texts but the difference is that this learning happens largely without human intervention through artificial intelligence. Simple neural networks simply take the same input and turn it into the same output every single time. Recurrent neural networks do this a bit more cleverly. They do not only take the input itself but also take into account the input around the actual input, which will result in much more accurate translations.

_Example:_

|__German original:__ |Sollten sich Unklarheiten betreffend der Auslegung einer oder mehrerer der nachstehenden Vertragsbestimmungen ergeben, gilt im Zweifel die für den Auftraggeber günstigere Auslegung. 
|---|---|
|__SMT translation:__ |__Should ambiguities concerning the interpretation of one or more of the following provisions of the Treaty, is in doubt for the customer more favorable interpretation.__
|__NMT translation:__ |__In the event of any uncertainties concerning the interpretation of one or more of the following provisions of the contract, the interpretation which is more favorable to the contracting entity shall apply.__

It appears that neural machine translation copes much better with syntax and produces a much more natural output. This is due to the fact that the system is able to translate the semantic meaning of entire phrases rather than translating word by word.

At first sight this makes post-editing a much simpler process and means it is actually post-editing rather than a complete re-translation. However, this is still in early phases of testing and neural machine translation still only processes one sentence at the time, which can lead to errors in ambiguous phrases, where human translators would take the wider context into account:

_Example:_

|__1st sentence:__ |The water was cold and the current strong. I went to the bank. My feet sunk into the mud. 
|---|---|
|__NMT translation:__|__Das Wasser war kalt und die Strömung stark, als ich zur Bank ging. Meine Füße versanken im Schlamm.__
|||
|__2nd sentence:__ |__I had run out of cash. I went to the bank. It had just closed.__
|__NMT translation:__ |__Ich hatte kein Bargeld mehr, also ging ich zur Bank, aber sie hatte geschlossen.__

In both of these sentences, neural machine translation renders the English word “bank” as “Bank” in  German, i. e. the financial institution. It did not identify the alternative meaning, i.e. river bank. Also, the pronoun “it” in the second sentence is translated as “es” (neutral) when it should be “sie” (feminine because “Bank” in German is feminine).

However, just by changing the first example a little bit, we can illustrate the strength of neural machine translation compared to statistical machine translation because it can accommodate the semantic qualities of words within a sentence:
1st sentence: The water was cold and the current strong, when I went to the bank. My feet sunk into the mud. 
NMT translation: Ich hatte kein Bargeld mehr, also ging ich zur Bank, aber sie hatte gerade geschlossen.

This time the neural machine translation chose the correct pronoun.

Neural machine translation is still in its infancy and there are things which are not generally understood just yet. One example is that NMT sometimes leaves out whole chunks of text for no apparent reasons. Another issue for language service providers to consider is data security, since most neural machine translation systems generally run in the cloud. However, some systems, such as SDL Trados 2017 already incorporate this technology via an API and one certainty is that we should keep an eye on this rapidly developing technology.