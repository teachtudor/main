import { useState } from 'react'
import Board from './Board'
import Spinner from './Spinner'

export default function GameBoard() {
  const [rollValue, setRollValue] = useState(null)

  return (
    <>
      <Spinner onSpin={(val) => {
        console.log('Rolled:', val)
        setRollValue(val)
      }} />
      

      <Board moveBy={rollValue} />
    </>
  )
}
