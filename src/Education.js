import React, { useState } from "react";
import Input from "./Input";
import PropTypes from "prop-types";
import Label from "./Label";
import { format } from "date-fns";

export default function Education({ display }) {
  const [formData, setFormData] = useState({
    School: "",
    Title: "",
    DateStart: "",
    DateEnd: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => {
      const { name, value } = e.target;
      const newDate =
        name === "DateStart" || name === "DateEnd"
          ? format(new Date(value), "yyyy-MM-dd")
          : "";
      return {
        ...prevData,
        [name]: name === "DateStart" || name === "DateEnd" ? newDate : value,
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
            value={formData.DateStart}
            onChange={handleChange}
          />
          <Input
            name="DateEnd"
            labelText="Date End:"
            type="date"
            classType="education-input-container"
            value={formData.DateEnd}
            onChange={handleChange}
          />
        </>
      ) : (
        <>
          <Label
            classType="education-input-container"
            text={formData.School}
            labelText="School:"
          />
          <Label
            classType="education-input-container"
            text={formData.Title}
            labelText="Title:"
          />
          <Label
            classType="education-input-container"
            text={formData.DateStart}
            labelText="Date Start:"
          />
          <Label
            classType="education-input-container"
            text={formData.DateEnd}
            labelText="Date End:"
          />
        </>
      )}
    </div>
  );
}

Education.propTypes = {
  display: PropTypes.bool,
};
