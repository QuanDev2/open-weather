const ApiService = {
  get: async function (instance) {
    try {
      const res = await instance.get()
      return res
    } catch (error) {
      return error.response
    }
  }
}

export default ApiService