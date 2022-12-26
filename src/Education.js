import React from "react";
import Input from "./Input";
import PropTypes from "prop-types";

export default function Education({ display }) {
  return (
    <div className="Education">
      <h3 className="education-title">Education</h3>
      {display === false ? (
        <>
          <Input
            name="School"
            labelText="School Name:"
            type="Text"
            minCharacter={2}
            maxCharacter={30}
            placeHolder="School"
            classType="education-input-container"
          />
          <Input
            name="Title"
            labelText="Title:"
            type="Text"
            minCharacter={2}
            maxCharacter={20}
            placeHolder="ex: Masters"
            classType="education-input-container"
          />
          <Input
            name="Date-start"
            labelText="Date Start:"
            type="date"
            classType="education-input-container"
          />
          <Input
            name="Date-end"
            labelText="Date End:"
            type="date"
            classType="education-input-container"
          />
        </>
      ) : (
        console.log("text")
      )}
    </div>
  );
}

Education.propTypes = {
  display: PropTypes.bool,
};
