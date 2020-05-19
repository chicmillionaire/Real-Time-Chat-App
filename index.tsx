import React, { Component } from 'react';
import { render } from 'react-dom';
import { Layout } from './components/layout';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Layout/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
