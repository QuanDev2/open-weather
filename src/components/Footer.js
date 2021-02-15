import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  text-align: center;
  padding-top: 1rem;
  height: 80px;
  background-color: var(--secondary);
  color: var(--white);
  line-height: 1.5;
  width: 100%;
  position: relative;
  bottom: 0;
`

function Footer() {
  return <Container>Copyright &copy; 2021 Quan Nguyen <br/>No Rights Reserved. </Container>
}

export default Footer
