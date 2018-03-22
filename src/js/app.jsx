import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        It works!
        <input name='principal' />
        <input name='interest' />
        <select name='term'>
          <option value='15'>15</option>
          <option value='30'>30</option>
        </select>
        <button id='calculate'>Calculate</button>
        <p id='output'></p>
      </div>
    );
  }
}
