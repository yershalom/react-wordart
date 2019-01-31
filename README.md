# react-wordart ([demo](https://yershalom.github.io/react-wordart/))

> The nostalgic WordArt we know just in react

[![NPM](https://img.shields.io/npm/v/react-wordart.svg)](https://www.npmjs.com/package/react-wordart) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-wordart
```

## Usage

```jsx
import React, { Component } from 'react'

import WordArt from 'react-wordart'

class Example extends Component {
  render () {
    return (
      <WordArt text='I Love WordArt' theme={`rainbow`} fontSize={100} />
    )
  }
}
```

### Properties

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
`text`|string|yes||
`theme`|string|no|`rainbow`| WordArt theme.
`duration`|number|no|`50`|
-----

## License

MIT © [yershalom](https://github.com/yershalom)

This module was bootstrapped with [create-react-library](https://github.com/transitive-bullshit/create-react-library).
