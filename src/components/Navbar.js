import styled from '@emotion/styled'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import ToggleBtn from '../utils/ToggleBtn';

const Container = styled.nav`
  display: flex;
  align-items: center;
  padding: 0.8rem 10rem;
  background: var(--secondary);
`

const NavForm = styled.form`
  display: flex;
  flex: 1;
`

const SearchInput = styled.input`
  flex: 1;
  border: none;
  border-radius: 5px 0 0 5px;
`

const SubmitBtn = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  height: 100%;
  width: 80px;
  border-radius: 0 5px 5px 0;
  color: var(--secondary);
  background: var(--accent-2);
  cursor: pointer;
  &:hover {
    opacity: 85%;
  }
`

const Title = styled(Link)`
  font-size: 1.5rem;
  margin-right: 1.5rem;
  color: var(--primary);
`

export default function Navbar({ handleSubmit, showError }) {
  const [input, setInput] = useState('')

  function onInputSubmit(e) {
    e.preventDefault()
    if (input === '') {
      showError('Please enter a city name')
      return
    }
    handleSubmit(input)
  }

  return (
    <Container>
      <Title to='/'>
        <span style={{ color: 'var(--accent-2)', fontSize: '2rem' }}>
          Quan's
        </span>{' '}
        Weather App
      </Title>
      <NavForm onSubmit={onInputSubmit}>
        <SearchInput
          type='search'
          name='q'
          placeholder='search for city...'
          onChange={(e) => setInput(e.target.value)}
        />
        <SubmitBtn type='submit'>
          <FontAwesomeIcon icon={faSearch} />
        </SubmitBtn>
      </NavForm>
      <ToggleBtn/>
    </Container>
  )
}
