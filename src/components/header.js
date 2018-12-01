import React from 'react'
import {Link} from 'gatsby'
import Logo from '../images/CS_web_developer_blue.png'

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
        <img src={Logo} 
        style={{
          height: '27px',
          display: 'inline',
          marginBottom: 0,
          marginRight: '5px'
        }} />
        <Link
          to="/"
          style={{
            color: '#3498DB',
            textDecoration: 'none',
            fontSize: '2rem',
            display: 'inline'
          }}
        >
         {siteTitle}
        </Link>
      </p>
    </header>
  </div>
)

export default Header
