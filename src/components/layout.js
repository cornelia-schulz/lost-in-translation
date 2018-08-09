import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopyright, faBars } from '@fortawesome/free-solid-svg-icons'

import Header from './header'
import Footer from './footer'
import './reset.css'
import './layout.css'
import './main.css'

library.add(faCopyright, faBars)

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Localisation blog' },
            { name: 'keywords', content: 'localisation, language, internationalisation' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className='container'
          style={{
            margin: '0 auto',
            padding: '0px',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer />
      </>
    )}
    
  />
 
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
