import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Octocat from '../images/Octocat.png'
import linkedIn from '../images/In-2CRev-34px-TM.png'
import '@fortawesome/fontawesome-svg-core/styles.css';

const Footer = () => (
  <footer>
    <FontAwesomeIcon icon='copyright'/> Cornelia Schulz 2018
    <p>
    <a href='https://github.com/cornelia-schulz' target='_blank'>
    <img src={Octocat} alt='Github' 
      style={{
        margin: '0',
        marginRight: '10px',
        marginTop: '5px',
        padding: '0',
        height: '35px',
      }}/></a>
      <a href='https://www.linkedin.com/in/cornelia-schulz/' target='_blank'>
        <img src={linkedIn} alt='LinkedIn' />
      </a></p>
  </footer>
)

export default Footer