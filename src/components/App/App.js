import { useState } from 'react';
import axios from 'axios';
import TriviaInfo from '../TriviaInfo/TriviaInfo';
// import Button from 'react-bootstrap/Button';

import './App.css';

function App() {
  // const [jservice, setJservice] = useState('')
  const [randomQuestion, setRandomQuestion] = useState([])
  const [answer, setAnswer] = useState({
    answer: false
  })
  const [count, setCount] = useState(0)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const baseUrl = "http://jservice.io/api/random"
    try {
      const response = await axios.get(baseUrl)

      setRandomQuestion(response.data[0])
      // console.log(question)

    } catch (e) {
      console.log(e)
    }
  }

  const handleClick = () => {
    setAnswer(!answer)
  }

  const handleIncrement = () => {
    setCount(count + 1)

  }

  const handleDecrement = () => {
    if (count === 0) return;
    setCount(count - 1)
  }

  const handleReset = () => {
    setCount(0)
  }


  return (
    <div>
      <div className="App">

        <h1>Welcome to Jeopardy!</h1>
        
        <form onSubmit={handleSubmit}>

          <button type="submit" className="btn btn-secondary" onSubmit={handleSubmit}>Random Trivia Question</button>
        </form>

        <h2>Score: {count}</h2>

        <button type="button" className="btn btn-success" onClick={handleIncrement}>Increase</button>

        <button type="button" className="btn btn-info" onClick={handleDecrement}>Decrease</button>

        <button type="button" className="btn btn-danger" onClick={handleReset}>Reset</button>

       </div>
        <TriviaInfo randomQuestion={randomQuestion} answer={answer} />

        <button type="button" className="btn btn-warning" onClick={handleClick}>Reveal/Hide Answer</button>
    </div>
  );
}

export default App;
