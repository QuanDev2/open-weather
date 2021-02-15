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

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import NotFound from './NotFound'
import ToggleBtn from '../utils/ToggleBtn'

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`
function App() {
  const { loading, data, error, handleSubmit, showError } = useFormSubmit()

  return (
    <Router>
      {data && (
        <Redirect
          to={{
            pathname: '/result',
            state: { data: data }
          }}
        />
      )}
      <GlobalStyle />
      <Wrapper>
        <Navbar handleSubmit={handleSubmit} showError={showError} />

        <Switch>
          {loading && <Spinner />}
          {error && <Error msg={error} />}
          <Route exact path='/' component={Welcome} />
          <Route path='/result'>
            <MainContent />
          </Route>
          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </Wrapper>
    </Router>
  )
}

export default App
