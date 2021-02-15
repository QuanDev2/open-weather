import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  margin-bottom: 0.3rem;
  margin-left: 0.6rem;
`

function DateTime({epochTime}) {
  // parse time to date

  const weekday = new Date(epochTime * 1000).toLocaleString('en-US', {
    weekday: 'long',
  })

  const day = new Date(epochTime * 1000).toLocaleString('en-US', {
    day: '2-digit',
  })

  const time = new Date(epochTime * 1000).toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  })
  return (
    <Container>
      {time} {weekday} {day}
    </Container>
  )
}

export default DateTime
