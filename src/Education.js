import React, { useState } from "react";
import Input from "./Input";
import PropTypes from "prop-types";
import Label from "./Label";

export default function Education({ display }) {
  const [formData, setFormData] = useState({
    School: "",
    Title: "",
    dateStart: "",
    dateEnd: "",
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
            value={formData.School}
            onChange={handleChange}
          />
          <Input
            name="Title"
            labelText="Title:"
            type="Text"
            minCharacter={2}
            maxCharacter={20}
            placeHolder="ex: Masters"
            classType="education-input-container"
            value={formData.Title}
            onChange={handleChange}
          />
          <Input
            name="DateStart"
            labelText="Date Start:"
            type="date"
            classType="education-input-container"
            value={formData.dateStart}
            onChange={handleChange}
          />
          <Input
            name="DateEnd"
            labelText="Date End:"
            type="date"
            classType="education-input-container"
            value={formData.dateEnd}
            onChange={handleChange}
          />
        </>
      ) : (
        <>
          <Label
            classType="education-input-container"
            labelText={formData.School}
          />
          <Label
            classType="education-input-container"
            labelText={formData.Title}
          />
          <Label
            classType="education-input-container"
            labelText={formData.dateStart}
          />
          <Label
            classType="education-input-container"
            labelText={formData.dateEnd}
          />
        </>
      )}
    </div>
  );
}

Education.propTypes = {
  display: PropTypes.bool,
};
