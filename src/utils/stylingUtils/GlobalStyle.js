/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react'
import './weatherIcons/css/weather-icons.css'

function GlobalStyle() {

  const globalStyle = css`
    :root {
      --secondary: #0e2947;
      --white: #fffcf9;
      --black: #071013;
      --accent-1: #ff8552;
      --accent-2: #f7b32b;
      --accent-3: #987284;
      --accent-4: #43aa8b;
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
      background-color: var(--background);
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
