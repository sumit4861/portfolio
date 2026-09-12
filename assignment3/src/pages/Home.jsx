import {useEffect, useState} from 'react'
import Header from '../components/Header'

function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if(loading) {
    return <h2>Loading...</h2>
  }

  return <Header />
}

export default Home