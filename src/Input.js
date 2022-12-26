import React from "react";
import PropTypes from "prop-types";

export default function Input({
  name,
  labelText,
  type,
  placeHolder,
  minCharacter,
  maxCharacter,
  classType,
  pattern,
  value,
  onChange,
}) {
  return (
    <div className={classType}>
      <label htmlFor={name} className="labels">
        {labelText}
      </label>
      <input
        type={type}
        placeholder={placeHolder}
        name={name}
        className="input-box"
        minLength={minCharacter}
        maxLength={maxCharacter}
        pattern={pattern}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  labelText: PropTypes.string,
  type: PropTypes.string,
  placeHolder: PropTypes.string,
  classType: PropTypes.string,
  minCharacter: PropTypes.number,
  maxCharacter: PropTypes.number,
  pattern: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.any,
};
