import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import McLarenFalls from '../images/McLarenFalls.jpg'
import reflections from '../images/reflections.jpg'
import cornwallis from '../images/cornwallis.jpg'
import city from '../images/city.jpg'


const IndexPage = () => (
  <Layout>
    <div className='banner'>
      <img src={McLarenFalls} alt='McLaren Falls in winter' />
    </div>
    <main>
    <div className='row'>
        <div className='main-image col-8'>
            <img src={cornwallis} alt='Cornwallis Wharf' />
        </div>
        <div className='main-text col-4'>
          <h2>Machine translations</h2>
          <p>
            Almost everyone probably has heard of services such as 
            Google Translate. Machine translation is the technical 
            term for any computerised translation service.
          </p>
          <Link to="/machine-translations">
            <input className='button' type='button' value='Read more' name='blogBtn' />
          </Link>
        </div>
      </div>
    <div className='row'>
        <div className='main-image col-8'>
            <img src={reflections} alt='Reflections in Auckland' />
        </div>
        <div className='main-text col-4'>
          <h2>Glossaries and Translation memories</h2>
          <p>
          Translation glossaries ensure consistency 
          and clarity in all translated materials by 
          helping eliminate uncertainty. Are you using 
          a glossary yet?
          </p>
          <Link to="/glossaries-and-translation-memories">
            <input className='button' type='button' value='Read more' name='blogBtn' />
            </Link>
        </div>
      </div>
      <div className='row'>
        <div className='main-image col-8'>
            <img src={city} alt='City reflections' />
        </div>
        <div className='main-text col-4'>
          <h2>Localisation - <br/>The very basics</h2>
          <p>Have you ever wondered what the difference is between
            localisation and internationalisation is and what these 
            terms mean?
          </p>
          <Link to="/localisation-the-very-basics">
            <input className='button' type='button' value='Read more' name='blogBtn' />
          </Link>
        </div>
      </div>
    </main>
  </Layout>
)

export default IndexPage
