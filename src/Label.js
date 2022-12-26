import React from "react";
import PropTypes from "prop-types";

export default function Label({ labelText, classType }) {
  return (
    <div className={classType}>
      <label className="labels">{labelText}</label>
    </div>
  );
}

Label.propTypes = {
  labelText: PropTypes.string,
  classType: PropTypes.string,
};
