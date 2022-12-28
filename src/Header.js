import React, { useState } from "react";
import Input from "./Input";
import personIcon from "./images/person-icon.png";
import PropTypes from "prop-types";
import Label from "./Label";

export default function Header({ display }) {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
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

  const regexEmail =
    // eslint-disable-next-line no-useless-escape
    /^[a-z0-9]+(?!.*(?:\+{2,}|\-{2,}|\.{2,}))(?:[\.+\-]{0,1}[a-z0-9])*@gmail\.com$/gim;

  const regexPhone =
    /^(\+?\d{0,2})?[\D]?\(?(\d{3})\)?[\D]?(\d{3})[\D]?(\d{4})$/gm;

  return (
    <div className="Header">
      <div className="left-header">
        {display === false ? (
          <>
            <Input
              name="Name"
              labelText="Name:"
              type="Text"
              placeHolder="Name"
              minCharacter={1}
              maxCharacter={15}
              classType="header-input-container"
              value={formData.Name}
              onChange={handleChange}
            />

            <Input
              name="Email"
              labelText="Email:"
              type="email"
              placeHolder="example@gmail.com"
              minCharacter={10}
              maxCharacter={30}
              classType="header-input-container"
              pattern={regexEmail}
              value={formData.Email}
              onChange={handleChange}
            />
            <Input
              name="Phone"
              labelText="Phone:"
              type="Text"
              placeHolder="(123)-456-7890"
              minCharacter={10}
              maxCharacter={15}
              classType="header-input-container"
              pattern={regexPhone}
              value={formData.Phone}
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <Label
              classType="header-input-container"
              text={formData.Name}
              labelText="Name:"
            />
            <Label
              classType="header-input-container"
              text={formData.Email}
              labelText="Email:"
            />
            <Label
              classType="header-input-container"
              text={formData.Phone}
              labelText="Phone:"
            />
          </>
        )}
      </div>
      <div className="person-icon-container">
        <img src={personIcon} className="person-icon"></img>
      </div>
    </div>
  );
}

Header.propTypes = {
  display: PropTypes.bool,
};
