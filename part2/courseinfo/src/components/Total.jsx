const Total = (props) => {
  const total = props.exercises.reduce((a, b) => a + b.exercises, 0);
  return (
    <p>Total number of exercises: {total}</p>
  )
}

export default Total