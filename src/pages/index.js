import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import McLarenFalls from '../images/McLarenFalls.jpg'
import reflections from '../images/reflections.jpg'


const IndexPage = () => (
  <Layout>
    <div className='banner'>
      <img src={McLarenFalls} alt='McLaren Falls in winter' />
    </div>
    <main>
      <div className='row'>
        <div className='main-image col-8'>
          <Link to="/">
            <img src={reflections} alt='reflections' />
          </Link>
        </div>
        <div className='main-text col-4'>
          <h2>Localisation - <br/>The very basics</h2>
          <p>Have you ever wondered what the difference is between
            localisation and internationalisation is and what these 
            terms mean?
          </p>
          <input className='button' type='button' value='Read more' name='blogBtn' />
        </div>
      </div>
    </main>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
