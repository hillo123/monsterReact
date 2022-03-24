
import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state =
    {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({monsters : users}))

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
<CardList/>
          {
            this.state.monsters.map(m => (

              <h1 key={m.id}>{m.name}</h1>

            ))

          }

        </header>
      </div>
    );
  }

}

export default App;
