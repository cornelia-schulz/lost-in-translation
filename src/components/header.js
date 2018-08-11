import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({ siteTitle }) => (
  <div className='header'
    style={{
      background: 'white',
      margin: '0',
      borderBottom: '1px solid #eee'
    }}
  >
    <header
      style={{
        margin: '0 auto'
      }}
    >
      <p style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#3498DB',
            textDecoration: 'none',
            fontSize: '2rem'
          }}
        >
        <FontAwesomeIcon icon='bars' /> {siteTitle}
        </Link>
      </p>
    </header>
  </div>
)

export default Header
