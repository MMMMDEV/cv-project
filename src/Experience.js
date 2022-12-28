import React, { useState } from "react";
import Input from "./Input";
import PropTypes from "prop-types";
import Label from "./Label";

export default function Experience({ display }) {
  const [formData, setFormData] = useState({
    Company: "",
    Position: "",
    Task: "",
    PositionTime: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => {
      const { name, value } = e.target;
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

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
            value={formData.Company}
            onChange={handleChange}
          />
          <Input
            name="Position"
            labelText="Position:"
            type="Text"
            minCharacter={2}
            maxCharacter={20}
            placeHolder="ex: manager"
            classType="experience-input-container"
            value={formData.Position}
            onChange={handleChange}
          />
          <Input
            name="Task"
            labelText="Main Tasks:"
            type="Text"
            minCharacter={2}
            maxCharacter={20}
            placeHolder="ex: project manager"
            classType="experience-input-container"
            value={formData.Task}
            onChange={handleChange}
          />
          <Input
            name="PositionTime"
            labelText="Time In Position:"
            type="Text"
            minCharacter={2}
            maxCharacter={10}
            placeHolder="ex: 2 months"
            classType="experience-input-container"
            value={formData.PositionTime}
            onChange={handleChange}
          />
        </>
      ) : (
        <>
          <Label
            classType="experience-input-container"
            text={formData.Company}
            labelText="Company:"
          />
          <Label
            classType="experience-input-container"
            text={formData.Position}
            labelText="Position:"
          />
          <Label
            classType="experience-input-container"
            text={formData.Task}
            labelText="Main Task"
          />
          <Label
            classType="experience-input-container"
            text={formData.PositionTime}
            labelText="Time In Position"
          />
        </>
      )}
    </div>
  );
}

Experience.propTypes = {
  display: PropTypes.bool,
};
