import React from 'react';

class App extends React.Component {
  render(){
    return <Button>React</Button>
  }
}

class Button extends React.Component {
  render(){
    return <button>{this.props.children}</button>
  }
}

export default App;