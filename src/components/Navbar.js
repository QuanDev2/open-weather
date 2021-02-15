import styled from '@emotion/styled'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons' 

const Container = styled.nav`
  display: flex;
  align-items: center;
  padding: 0.8rem 3rem;
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
const SearchIcon = () => <FontAwesomeIcon icon={faSearch} />

const SubmitBtn = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  height: 100%;
  border-radius: 0 5px 5px 0;
  background: var(--accent-2);
  cursor: pointer;

`

const Title = styled.h1`
  font-size: 1.5rem;
  margin-right: 1.5rem;
  color: var(--white);
`

export default function Navbar({handleSubmit}) {

  const [input, setInput] = useState("")

  function onInputSubmit(e) {
    e.preventDefault()
    handleSubmit(input)
  }

  return (
    <Container>
      <Title>
        
        <span style={{ color: 'var(--accent-2)', fontSize: '1.5rem' }}>Quan's</span> Weather App
      </Title>
      <NavForm onSubmit={onInputSubmit}>
        <SearchInput
          type='search'
          name='q'
          placeholder='search for city...'
          onChange={(e) => setInput(e.target.value)}
        />
        <SubmitBtn type='submit'>
          <SearchIcon />
        </SubmitBtn>
      </NavForm>
    </Container>
  )
}
 