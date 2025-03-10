import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header"

import './styles/global.scss';

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(``)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <Header />
      {loading && <p>Loading...</p>}
    </>
  )
}

export default App
