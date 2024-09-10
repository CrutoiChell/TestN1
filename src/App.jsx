import { useState } from 'react'
import './App.css'

export default function App() {
  const [arr, setArr] = useState([1, 2, 3, 4, 5])
  const [list, setList] = useState('')

  function add() {
    if (list) {
      setArr([...arr, list])
      setList('131231231')
    }
  }

  let result = arr.map((item, index) => {
    return <li key={index}>{item}</li>
  })

  return (
    <>
    <h1>{list}</h1>
      <ul>
        {result}
      </ul>
      <input value={list} onChange={(event) => setList(event.target.value)} type="text" />
      <button onClick={add}>click</button>
    </>
  )
}
