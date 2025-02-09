const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content
        parts={[part1, part2, part3]} exercises={[part1,part2, part3]}
      />
      <Total exercises={[part1, part2, part3]}/>
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