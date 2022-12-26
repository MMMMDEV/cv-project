import React from "react";
import Input from "./Input";
import PropTypes from "prop-types";

export default function Experience({ display }) {
  return (
    <div className="Experience">
      <h3 className="experience-title">Experience</h3>
      {display === false ? (
        <>
          <Input
            name="Company"
            labelText="Company Name:"
            type="Text"
            minCharacter={2}
            maxCharacter={30}
            placeHolder="Company"
            classType="experience-input-container"
          />
          <Input
            name="Position"
            labelText="Position:"
            type="Text"
            minCharacter={2}
            maxCharacter={20}
            placeHolder="ex: manager"
            classType="experience-input-container"
          />
          <Input
            name="Task"
            labelText="Main Tasks:"
            type="Text"
            minCharacter={2}
            maxCharacter={20}
            placeHolder="ex: project manager"
            classType="experience-input-container"
          />
          <Input
            name="Position-time"
            labelText="Time In Position:"
            type="Text"
            minCharacter={2}
            maxCharacter={10}
            placeHolder="ex: 2 months"
            classType="experience-input-container"
          />
        </>
      ) : (
        console.log("text")
      )}
    </div>
  );
}

Experience.propTypes = {
  display: PropTypes.bool,
};
