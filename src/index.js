import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "css-wordart";

const cx = classNames.bind(styles);

const WordArt = ({ text, theme, fontSize }) => {
  const th = theme;
  const className = cx("wordart", th);

  return (
    <div className={className} style={{ fontSize }}>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

WordArt.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(Object.keys(themes)),
  fontSize: PropTypes.number
};

WordArt.defaultProps = {
  theme: "rainbow",
  fontSize: 50
};

export default WordArt;
