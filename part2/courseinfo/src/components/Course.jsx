import Total from './Total'

const Course = ({ courses }) => {
    // console.log(courses);
    // courses.map((a) => console.log(a.parts))
    // courses.map((a) => console.log(a.parts.map((b) => b.exercises)));

    return (
        <div>
            {courses.map((a) =>
                <div>
                    <h2>{a.name}</h2>
                    {a.parts.map((b) =>
                        <>
                            <Part part={b} key={b.id} name={b.name} />
                        </>
                    )}
                    <Total parts={a.parts} />
                </div>
            )}
        </div>
    )
}


const Part = ({ part }) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
}

export default Course


