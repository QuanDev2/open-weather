import { useState } from 'react'
import { buildGetReq } from '../utils/networkUtils/OpenWeatherApi'
import ApiService from '../utils/networkUtils/ApiService'

function useFormSubmit() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState('')

  function showError(err) {
    setError(err)
  }

  async function handleSubmit(searchInput) {
    setData(null)
    setLoading(true)
    setError('')
    const getInstance = buildGetReq(searchInput)
    const response = await ApiService.get(getInstance)
    // after got the response, set hide loading spinner
    setLoading(false)
    if (response.status === 404) {
      setError('City not found. Try another city.')
      setData(null)
    } else if (response.status === 400) {
      setError('Please enter a valid city name.')
      setData(null)
    } else if (response.status === 401) {
      setError('Your stupid developer forgot to set API KEY env again. Call him now!')
      setData(null)
    }
    else if (response.status === 200) {
      setData(response.data)
      setError('')
    }
  }
  return { loading, data, error, handleSubmit, showError }
}

export default useFormSubmit
