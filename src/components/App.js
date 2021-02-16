import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styled from '@emotion/styled'
import MainContent from './MainContent'
import GlobalStyle from '../utils/stylingUtils/GlobalStyle'
import Homepage from './Homepage'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import NotFound from './NotFound'


const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`
function App() {

  return (
    <Router>
      <GlobalStyle />
      <Wrapper>
        <Navbar  />
        <Switch>
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
