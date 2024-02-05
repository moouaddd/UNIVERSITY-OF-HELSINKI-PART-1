import { useState } from 'react';

const StatisticLine2 = ({good, bad, neutral}) => {
  const total = good + neutral + bad;

  return(
    <div>
    <p>Positive: {good / total * 100}%</p>
    </div>
  )
}

const StatisticLine1 = ({good, bad, neutral}) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  
  return(
    <div>     
      <p>Average: {average}</p>
    </div>
  )
}

const StatisticLine = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  return <p>All: {total}</p>;
};

const Buttons = ({ good, neutral, bad, setGood, setNeutral, setBad }) => {
  function handleClickBad() {
    setBad(bad + 1);
  }
  function handleClickNeutral() {
    setNeutral(neutral + 1);
  }
  function handleClickGood() {
    setGood(good + 1);
  }

  return (
    <div>
      <div>
        <h1>Feedback</h1>
      </div>
      <button onClick={handleClickGood}>I like it</button>
      <button onClick={handleClickNeutral}>It's normal</button>
      <button onClick={handleClickBad}>I don't like it</button>
    </div>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
 

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1>Nada</h1>
      </div>
    );
  } else {
    return (
      <div>
  <h1>Statistics</h1>
  <table>
    <tbody>
      <tr>
        <td><p>Bad comments: {bad}</p></td>
      </tr>
      <tr>
        <td><p>Neutral comments: {neutral}</p></td>
      </tr>
      <tr>
        <td><p>Good comments: {good}</p></td>
      </tr>
      <tr>
        <td><StatisticLine good={good} neutral={neutral} bad={bad} /></td>
      </tr>
      <tr>
      <td><StatisticLine1 good={good} neutral={neutral} bad={bad} /></td>
      </tr>
      <tr>
      <td><StatisticLine2 good={good} neutral={neutral} bad={bad} /></td>
      </tr>
    </tbody>
  </table>
</div>

    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Buttons good={good} neutral={neutral} bad={bad} setGood={setGood} setNeutral={setNeutral} setBad={setBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
