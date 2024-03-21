import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter]=useState(0)

  const AddValue = () => {
    setCounter(counter + 1)
  }
  
  const SubValue = () => {
    setCounter(counter - 1)
  }

  return(
    <div>
      <h1>A SIMPLE COUNTER</h1>
      <h3>The count is: {counter}</h3>
      <button onClick={AddValue}>Add Value</button>
      <br></br>
      <br></br>
      <button onClick={SubValue}>Decrease Value</button>
      <p>This simple react app shows the usecase of hooks in react. 
        The buttons add value adds 1 to the current value and makes it the new value: <b>{counter}. </b>
        The button decrease value subtracts 1 from the current value and the new value becomes: <b>{counter}. </b>
        This feature helps react to update multiple UI component at once and at scale!</p>
    </div>
  )
}

export default App