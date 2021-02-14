/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react'

function GlobalStyle() {

  const globalStyle = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
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
