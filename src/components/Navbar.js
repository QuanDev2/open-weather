/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

export default function Navbar() {

  const styles = css`
  & {
  }
  `

  return (
    <nav>
      <div css={styles}>
        <input type="search" name="q" id="locSearchBox" />
        <button type="submit">search</button>
        Hello world
      </div>
    </nav>
  )
}
