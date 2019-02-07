import React, { Component } from "react";

import WordArt from "react-wordart";
const themes = [
  "rainbow",
  "blues",
  "superhero",
  "radial",
  "tilt",
  "purple",
  "horizon",
  "italicOutline",
  "slate"
];
export default class App extends Component {
  render() {
    return (
      <div>
        <a
          className="github-button"
          href="https://github.com/yershalom/react-wordart"
          data-size="large"
          data-show-count="true"
          aria-label="Star yershalom/react-wordart on GitHub"
        >
          Star
        </a>
        {themes.map(theme => (
          <div style={{ padding: 30 }} key={theme}>
            <WordArt text={theme} theme={theme} />
          </div>
        ))}
      </div>
    );
  }
}
