import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const fetchData = async () => {
    await axios
      .get('https://mangalib.me/toukyou-kushu', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      })
      .then((res) => console.log(res))
    return
  }

  return (
    <>
      <button onClick={fetchData}>fetch</button>
    </>
  )
}

export default App
