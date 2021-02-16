/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react'
import './weatherIcons/css/weather-icons.css'

function GlobalStyle() {

  const globalStyle = css`
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
