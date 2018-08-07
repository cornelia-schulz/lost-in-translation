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
        <div className='main-image'>
          <Link to="/">
            <img src={reflections} alt='reflections' />
          </Link>
        </div>
        <div className='main-text'>
          <h2>Localisation - The very basics</h2>
        </div>
      </div>
    </main>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
