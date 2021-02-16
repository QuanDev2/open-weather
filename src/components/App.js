import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styled from '@emotion/styled'
import MainContent from './MainContent'
import GlobalStyle from '../utils/stylingUtils/GlobalStyle'
import Homepage from './Homepage'
import Error from './Error'
import Spinner from '../utils/Spinner'
import useFormSubmit from '../utils/useFormSubmit'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import NotFound from './NotFound'


const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`
function App() {
  const { error, showError } = useFormSubmit()

  return (
    <Router>
      <GlobalStyle />
      <Wrapper>
        <Navbar showError={showError} />
        <Switch>
          {error && <Error msg={error} />}
          <Route exact path='/' component={Homepage} />
          <Route path='/forecast'>
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
