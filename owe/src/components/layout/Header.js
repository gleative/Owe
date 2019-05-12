import React from 'react'
// import { Link } from 'react-router-dom'

// Represents the header of the page
export default function Header() {
  return (
    <header style={headerStyle}>
        {/* For å skrive inline bruk to "{{}}" */}
        <h1>OWE</h1>
        {/* <Link style={linkStyle} to="/">Overview</Link>
        <Link style={linkStyle} to="/persons">Persons</Link> */}

        {/* TODO: Fiks link */}
        <p style={paragraphStyle}>Overview | Persons</p>
    </header>
  )
}

const headerStyle = {
  textAlign: 'center',
  padding: '1px',
  color: '#ffffff',
  background: '#00538e',
  boxShadow: '10px 10px 5px #23272d',
  verticalAlign: 'text-top',
}

const headerTitleStyle = {
  fontSize: '20px',
}

const linkStyle = {
}

const paragraphStyle = {
  color: '#bfbfbf',
}

const currencyParagraphStyle = {
  textAlign: 'end',
}
