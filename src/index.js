import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from 'css-wordart'

const themes = {
  rainbow: 'rainbow',
  blues: 'blues',
  superhero: 'superhero',
  radial: 'radial',
  tilt: 'tilt',
  purple: 'purple',
  horizon: 'horizon',
  italicOutline: 'italicOutline',
  slate: 'slate'
}

const cx = classNames.bind(styles)

const WordArt = ({ text, theme, fontSize }) => {
  const th = themes[theme]
  const className = cx('wordart', th)

  return (
    <div className={className} style={{fontSize}} >
      <span className={styles.text}>{text}</span>
    </div>
  )
}

WordArt.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(Object.keys(themes)),
  fontSize: PropTypes.number
}

WordArt.defaultProps = {
  theme: 'rainbow',
  fontSize: 50
}

WordArt.themes = Object.keys(themes)

export default WordArt
