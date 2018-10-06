import React from 'react'
import {Link} from 'gatsby'

const Header = ({siteTitle}) => (
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
         {siteTitle}
        </Link>
      </p>
    </header>
  </div>
)

export default Header
