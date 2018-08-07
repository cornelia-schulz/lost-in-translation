import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <img src='src/images/McLarenFalls.jpg' alt='McLaren Falls in winter' />
    <main>
      <div className='row'>
        <div className='main-image'>
          <Link to="/">
            <img src='src/images/reflections.jpg' alt='reflections' />
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
