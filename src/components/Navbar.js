import styled from '@emotion/styled'
import {useState} from 'react'

const NavForm = styled.form`
  width: 80%;
  margin: auto;
  display: flex;
  padding: 1rem;
  
`

const SearchInput = styled.input`
  flex: 1;

`
const SubmitBtn = styled.button`
  padding: 0.5rem 1rem;
`

export default function Navbar({handleSubmit}) {

  const [input, setInput] = useState("")

  function onInputSubmit(e) {
    e.preventDefault()
    handleSubmit(input)
  }

  return (
    <nav>
      <NavForm onSubmit={onInputSubmit}>
        <SearchInput
          type='search'
          name='q'
          onChange={(e) => setInput(e.target.value)}
        />
        <SubmitBtn type='submit'>search</SubmitBtn>
      </NavForm>
    </nav>
  )
}
 