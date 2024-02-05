import { useState } from 'react';

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0: 3,
    1: 1,
    2: 3,
    3: 5,
    4: 8,
    5: 9,
    6: 3,
    7: 4,
  });

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is the same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast is to go well.',
  ];

  const handleVote = () => {
    const newVotes = { ...votes };
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const handleNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * 7));
  };

  const getMostVotedAnecdote = () => {
    let mostVoted = 0;
    let maxVotes = 0;

    for (const anecdote in votes) {
      if (votes[anecdote] > maxVotes) {
        maxVotes = votes[anecdote];
        mostVoted = anecdote;
      }
    }

    return { anecdote: anecdotes[mostVoted], votes: maxVotes };
  };

  const mostVotedAnecdote = getMostVotedAnecdote();



  return (
    <div>
        <div><h1>Anecdote of the day</h1></div>
      <div>{anecdotes[selected]}</div>
      <div>Has {votes[selected]} votes</div>
      <div>
        <button onClick={handleVote}>Vote</button>
        <button onClick={handleNextAnecdote}>Next Anecdote</button>
      </div>
        <div>
        <h1>Anecdote with most votes</h1>
        </div>
        <div>
        {mostVotedAnecdote.anecdote}
        </div>
        <div>
        Has {mostVotedAnecdote.votes} votes
        </div>
    </div>
  );
};

export default App;
