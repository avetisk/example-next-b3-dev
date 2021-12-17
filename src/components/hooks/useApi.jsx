import axios from "axios"
import { useEffect, useState } from "react"

const useApi = (url) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    ;(async () => {
      const { data: result } = await axios(url)

      setData(result)
    })()
  }, [url])

  return data
}

export default useApi
