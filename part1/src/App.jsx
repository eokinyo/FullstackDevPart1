const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  console.log(props)
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}
const Content = (props) => {
  console.log(props)
  return (
     <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}


const Total = (props) => {
  console.log(props)
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises

  return (
    <div>
      <p>
        Number of exercises {total}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of react',
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

  const parts = [part1, part2, part3]

  return (
    <div>
      <Header course={course}/>
      <Content parts = {parts}/>
      <Total parts = {parts}/>
      <Footer />
    </div>
  )

}

const Footer = () => {
  return (
    <div>
      App created by <a href='https://github.com/eokinyo'>Elly Okinyo</a>
    </div>
  );
}
export default App