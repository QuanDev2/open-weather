import React, { useState } from 'react'
import Navbar from './Navbar'
import { buildGetReq } from '../utils/networkUtils/OpenWeatherApi'
import { get } from '../utils/networkUtils/ApiService'
import Footer from './Footer'
import styled from '@emotion/styled'
import MainContent from './MainContent'
import GlobalStyle from '../utils/stylingUtils/GlobalStyle'
import Welcome from './Welcome'
import Error from './Error'
import Spinner from '../utils/Spinner';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`
function App() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [welcome, setWelcome] = useState(true)
  async function handleSubmit(searchInput) {
    setLoading(true)
    setWelcome(false)
    setError(false)
    const getInstance = buildGetReq(searchInput)
    const response = await get(getInstance)
    // after got the response, set hide loading spinner 
    setLoading(false)
    if (response.status === 404) {
      console.error('404 page')
      setError('City not found. Try another city.')
      setData(null)
    } else if (response.status === 200) {
      setData(response.data)
      setError('')
    }
  }

  return (
    <Wrapper>
      <GlobalStyle />
      <Navbar handleSubmit={handleSubmit} />
      {loading && <Spinner />}
      {error && <Error msg={error} />}
      {data && <MainContent data={data} />}
      {welcome && <Welcome />}
      <Footer />
    </Wrapper>
  )
}

export default App
