import { useState } from 'react'
import { buildGetReq } from '../utils/networkUtils/OpenWeatherApi'
import { get } from '../utils/networkUtils/ApiService'

function useFormSubmit() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [welcome, setWelcome] = useState(true)

  function showError(err) {
    setError(err)
    setWelcome(false)
  }

  async function handleSubmit(searchInput) {
    setLoading(true)
    setWelcome(false)
    setError(false)
    const getInstance = buildGetReq(searchInput)
    const response = await get(getInstance)
    // after got the response, set hide loading spinner
    setLoading(false)
    if (response.status === 404) {
      setError('City not found. Try another city.')
      setData(null)
    } else if (response.status === 400) {
      setError('Please enter a valid city name.')
      setData(null)
    } else if (response.status === 200) {
      setData(response.data)
      setError('')
    }
  }
  return { loading, data, error, welcome, handleSubmit, showError }
}

export default useFormSubmit
