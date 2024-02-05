const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part course={props.course} />
    </div>
  );
};

const Total = (props) => {
  console.log(props);
  return (
    <div>
      <p>Total of exercises {props.exercise}</p>
    </div>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.course.name}  {props.course.exercises} exercises</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

let exercise = 0;
course.parts.forEach(part => {
  exercise += part.exercises;
});

  return (
    <div>
      <Header course={course.name} />
      <Content course={course.parts[0]} />
      <Content course={course.parts[1]} />
      <Content course={course.parts[2]} />
      <Total exercise={exercise} />
    </div>
  );
};

export default App;
