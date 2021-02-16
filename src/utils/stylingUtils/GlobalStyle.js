/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react'
import './weatherIcons/css/weather-icons.css'

function GlobalStyle() {

  const globalStyle = css`
    /* smooth out theme transition */
    *:not(body) {
      transition: all 0.5s ease;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
    }

    a {
      text-decoration: none;
    }

    body {
      background-color: var(--background-body);
    }

    li {
      list-style: none;
    }

    input {
      padding: 0 0.5rem;
    }
  `
  return (
    <Global styles={globalStyle} />
  )
}

export default GlobalStyle
