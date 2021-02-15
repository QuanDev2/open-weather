/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react'
import './weatherIcons/css/weather-icons.css'

function GlobalStyle() {

  const globalStyle = css`
    :root {
      --background: #fffffc;
      --secondary: #001935;
      --white: #fefffe;
      --black: #071013;
      --accent-1: #d95e3f;
      --accent-2: #f1992f;
      --accent-3: #529fcd;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
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
