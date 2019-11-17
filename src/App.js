import React from 'react';
import PropTypes from 'prop-types';

// class App extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onClick={() => { console.log("I'm clocked") }} />
//       </React.Fragment>
//     )

//   }
// }

const App = () => {
  const profiles = [
    { name: "manaty", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "Noname", age: 1 }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }

    </div>

  )
}
const User = (props) => {
  return <div>Hi, i am {props.name}, and {props.age} years old!</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
