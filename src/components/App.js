import React, {useState} from 'react';
import Navbar from './Navbar';

import Body from './Body';
import GlobalStyle from '../utils/GlobalStyle'
import { buildGetReq } from '../utils/networkUtils/OpenWeatherApi'
import { get } from '../utils/networkUtils/ApiService'

function App() {

  const [data, setData] = useState(null)
  const [error, setError] = useState("")
  async function handleSubmit(searchInput) {
    const getInstance = buildGetReq(searchInput)
    const response = await get(getInstance)
    if (response.status === 404) {
      console.error("404 page")
      setError("City not found. Try another city.")
      setData(null)
    } else if (response.status === 200) {
      setData(response.data)
      setError("")
    }
  }


  return (
    <div>
      <GlobalStyle />
      <Navbar handleSubmit={handleSubmit} />
      {error && <h3>{error}</h3>}
      {data && <Body data={data} />}
    </div>
  )
}

export default App;
