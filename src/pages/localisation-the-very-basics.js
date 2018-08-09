import React from 'react'
import Layout from '../components/layout'
import reflections from '../images/reflections.jpg'

const blog1 = () => {
  return (
    <Layout>
      <img className='blog-banner' src={reflections} alt='Reflections' />
      <article>
        <h3>Localisation - The very basics</h3>
        <p>
          I have worked in software localisation for a good few years now and often I find myself
          googling and collecting information and how to’s on various topics related to localisation
          and I thought, rather than keeping it all hidden in my little notebook, I will summarise
          things I research and collate them in this blog.
    </p>
        <p>
          Localisation is often abbreviated to L10N, which simply takes the first and the last letter
          of the word itself, plus the count of letters of the word in between these letters.
    </p>
        <p>
          It is the provision of service for the linguistic and cultural adaption of products to the
          requirement of a market. What exactly does that mean? Translating is just one little part of
          localisation. Translation is the process of converting written text from one language to another.
          It requires that the full meaning of the source material be accurately rendered into the target language.
          Special attention needs to be paid to nuance and style.
    </p>
        <p>
          As part of localistion, time, date and number formats need to be adapted, the correct currencies
          and payment methods need to be used. In some cases images and colours need to be adapted as well
          as some colours may have different connotations in different cultures.
    </p>
        <p>
          In comparison what is internationalisation? Internationalisation can also be abbreviated in a similar
           fashion: I16N. It is the process of generalising a product in such a way that it can be adapted in
           various languages and cultural conventions without having to redesign the product every single time
           you would like to publish it in another market.
    </p>
        <p>
          Another term worth mentioning is globalisation. Globalisation addresses business issues of taking
          a product to a global market. In terms of websites, globalisation refers to enabling that website
          to deal with non-English speaking visitors, i.e. internationalising the website’s back-end, designing
          a multilingual architecture (e.g. ensure that your databases can deal with special characters) and
          localising the website’s static or dynamic content.
        </p>
      </article>
    </Layout>
  )
}

export default blog1