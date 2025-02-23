const Total = (parts) => {
  const exercises = parts.parts.map((a) => a.exercises);
  const total = exercises.reduce((b, c) => b + c, 0)
  return (
    <p>Total number of exercises: {total}</p>
  )
}

export default Total