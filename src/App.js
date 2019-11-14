import React from 'react';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onClick={() => { console.log("I'm clocked") }} />
      </React.Fragment>
    )

  }
}

export default App;
