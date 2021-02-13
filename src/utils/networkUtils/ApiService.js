export async function get(instance) {
  try {
    const res = await instance.get()
    return res
  } catch(error) {
    return error.response
  }
}