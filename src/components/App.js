import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styled from '@emotion/styled'
import MainContent from './MainContent'
import GlobalStyle from '../utils/stylingUtils/GlobalStyle'
import Welcome from './Welcome'
import Error from './Error'
import Spinner from '../utils/Spinner'
import useFormSubmit from '../utils/useFormSubmit'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './NotFound';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`
function App() {
  const {
    loading,
    data,
    error,
    welcome,
    handleSubmit,
    showError
  } = useFormSubmit()

  return (
    <Router>
      <Wrapper>
        <GlobalStyle />
        <Navbar handleSubmit={handleSubmit} showError={showError} />
        <Switch>
          {loading && <Spinner />}
          {error && <Error msg={error} />}
          {data && <MainContent data={data} />}
          {/* {welcome && <Welcome />} */}
          <Route exact path='/' component={Welcome}/>
          <Route path='*' component={NotFound}/>
        </Switch>
        <Footer />
      </Wrapper>
    </Router>
  )
}

export default App
