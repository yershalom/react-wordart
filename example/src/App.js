import React, { Component } from 'react'

import WordArt from 'react-wordart'

export default class App extends Component {
  render() {
    return (
      <div contentEditable>
        <a
          className='github-button'
          href='https://github.com/yershalom/react-wordart'
          data-size='large'
          data-show-count='true'
          aria-label='Star yershalom/react-wordart on GitHub'
        >
          Star
        </a>
        {WordArt.themes.map(theme => (
          <div style={{ padding: 30 }} key={theme}>
            <WordArt text={theme} theme={theme} />
          </div>
        ))}
      </div>
    )
  }
}
