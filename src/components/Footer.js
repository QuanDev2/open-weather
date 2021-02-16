import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  margin-top: auto;
  text-align: center;
  padding: 1rem;
  height: 80px;
  background-color: var(--background-nav);
  color: var(--foreground-nav);
  line-height: 1.5;
  width: 100%;
`

function Footer() {
  return (
    <Container>
      Copyright &copy; 2021 Quan Nguyen <br />
      No Rights Reserved.{' '}
    </Container>
  )
}

export default Footer
