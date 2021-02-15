import React from 'react'
import styled from '@emotion/styled'
import PuffLoader from 'react-spinners/PuffLoader'

const Container = styled.div`
  /* height: 100%; */
  padding-top: 17rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--accent-1);
`

const StyledLoader = styled(PuffLoader)`
  font-size: 4rem;
  padding-bottom: 200px;
  font-weight: 700;
`

export default function Spinner() {
  return (
    <Container>
      <StyledLoader size={100}/>
    </Container>
  )
}
