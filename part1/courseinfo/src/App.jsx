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

  return (
    <div>
      <Header course={course.name}/>
      <Content
        parts={course.parts} exercises={course.parts}
      />
      <Total exercises={course.parts}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercise={props.exercises[0].exercises} />
			<Part part={props.parts[1].name} exercise={props.exercises[1].exercises} />
			<Part part={props.parts[2].name} exercise={props.exercises[2].exercises} />
		</div>
  )
}

const Part = (props) => {
  return (
    <p> {props.part}: {props.exercise} exercises</p>
  )
}

const Total = (props) => {
  console.log(props)
  const total = props.exercises.reduce((a,b)=> a+b.exercises, 0);
  return (
    <p>Total number of exercises: {total}</p>
  )
}


export default App