import React, { Component } from 'react'

import Chuck from 'react-chuck'

export default class App extends Component {
  render () {
    return (
      <div>
        <div style={{padding: 20}}>
          <Chuck />
        </div>
        <div style={{padding: 20, fontFamily: 'Helvetica Neue, Arial', backgroundColor: 'grey', color: 'white'}}>
          <span style={{fontSize: 40}}>Chuck with Style:</span>
          <Chuck />
        </div>
      </div>
    )
  }
}
