import React, { Component } from 'react'

import WordArt from 'react-wordart'

export default class App extends Component {
  render () {
    return WordArt.themes.map(theme => <div style={{padding: 30}} key={theme}><WordArt text={theme} theme={theme} /></div>)
  }
}
