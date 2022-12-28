import React from "react";
import PropTypes from "prop-types";

export default function Label({ labelText, classType, text }) {
  return (
    <div className={classType}>
      <label className="labels">{labelText}</label>
      <p className="prev-text">{text}</p>
    </div>
  );
}

Label.propTypes = {
  labelText: PropTypes.string,
  classType: PropTypes.string,
  text: PropTypes.string,
};
