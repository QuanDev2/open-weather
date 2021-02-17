import React, {  } from 'react'
import styled from '@emotion/styled'
import CityInfo from './city/CityInfo'
import Spinner from '../utils/Spinner'
import ForecastList from './ForecastList'
import Error from './Error'
import useFetchData from '../hooks/useFetchData'

const Container = styled.div`
  background: var(--background-body);
  flex: 1;
  padding-bottom: 4rem;

  &::before {
    content: '';
    display: block;
    background: var(--accent-error);
    height: 1px;
  }
`
function MainContent() {
  const {data, loading, error} = useFetchData()

  if (loading) return <Spinner />
  else if (error) return <Error msg={error} />
  else if (!data) return null
  else
    return (
      <Container>
        <CityInfo city={data.city} />
        <ForecastList list={data.list} />
      </Container>
    )
}

export default MainContent
