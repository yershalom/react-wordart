# react-wordart ([demo](https://yershalom.github.io/react-wordart/))

> The nostalgic WordArt we know just in react

[![NPM](https://img.shields.io/npm/v/react-wordart.svg)](https://www.npmjs.com/package/react-wordart) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.org/yershalom/react-wordart.svg?branch=master)](https://travis-ci.org/yershalom/react-wordart)

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
`fontSize`|number|no|`50`|

### Available Themes
Theme | Output
:--- | :--- 
`rainbow` | ![screen shot 2019-01-31 at 18 19 05](https://user-images.githubusercontent.com/16322616/52068180-d7539280-2584-11e9-990e-c8c1d4fb3011.png)
`blues` | ![screen shot 2019-01-31 at 18 19 09](https://user-images.githubusercontent.com/16322616/52068181-d7539280-2584-11e9-9087-aefefb0003a7.png)
`superhero` | ![screen shot 2019-01-31 at 18 19 14](https://user-images.githubusercontent.com/16322616/52068182-d7539280-2584-11e9-82e8-2e934bf4fb28.png)
`radial` | ![screen shot 2019-01-31 at 18 19 18](https://user-images.githubusercontent.com/16322616/52068184-d7ec2900-2584-11e9-8c5e-1c23d1a8cfbf.png)
`tilt` | ![screen shot 2019-01-31 at 18 19 21](https://user-images.githubusercontent.com/16322616/52068185-d7ec2900-2584-11e9-8f54-d63eb504496a.png)
`purple` | ![screen shot 2019-01-31 at 18 19 24](https://user-images.githubusercontent.com/16322616/52068186-d7ec2900-2584-11e9-9812-e73f9f2e00e4.png)
`horizon` | ![screen shot 2019-01-31 at 18 19 27](https://user-images.githubusercontent.com/16322616/52068187-d7ec2900-2584-11e9-9575-e85c3f8259e2.png)
`italicOutline` | ![screen shot 2019-01-31 at 18 19 31](https://user-images.githubusercontent.com/16322616/52068188-d884bf80-2584-11e9-814b-56b9d6df1251.png)
`slate` | ![screen shot 2019-01-31 at 18 19 34](https://user-images.githubusercontent.com/16322616/52068189-d884bf80-2584-11e9-9e3c-572aec718ab1.png)

-----

## License

MIT © [yershalom](https://github.com/yershalom)

This module was bootstrapped with [create-react-library](https://github.com/transitive-bullshit/create-react-library).
