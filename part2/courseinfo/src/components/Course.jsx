const Course = ({ course }) => {
    // console.log(course.parts);
    // console.log(course.parts.map((a) => console.log(a)))

    return (
        <div>
            <h1>{course.name}</h1>
            <div>
                {course.parts.map((a) =>
                    <Part part={a} key={a.id} name={a.name} />
                )}

            </div>

        </div>
    )
}


const Part = ({ part }) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
}

export default Course