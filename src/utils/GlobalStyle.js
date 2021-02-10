/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react'

function GlobalStyle() {

  const globalStyle = css`
    * {
      margin: 0;
      padding: 0;
      
    }
  `
  return (
    <Global styles={globalStyle} />
  )
}

export default GlobalStyle
