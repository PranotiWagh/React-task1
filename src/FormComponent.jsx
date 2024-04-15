// FormComponent.js
import React, { useState } from 'react';

const FormComponent = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    branch: '',
    tenthPercentage: '',
    twelfthPercentage: '',
    graduationPercentage: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      college: '',
      branch: '',
      tenthPercentage: '',
      twelfthPercentage: '',
      graduationPercentage: ''
    }); // Clear input after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        College:
        <input type="text" name="college" value={formData.college} onChange={handleChange} />
      </label>
      <label>
        Branch:
        <input type="text" name="branch" value={formData.branch} onChange={handleChange} />
      </label>
      <label>
        10th Percentage:
        <input type="text" name="tenthPercentage" value={formData.tenthPercentage} onChange={handleChange} />
      </label>
      <label>
        12th Percentage:
        <input type="text" name="twelfthPercentage" value={formData.twelfthPercentage} onChange={handleChange} />
      </label>
      <label>
        Graduation Percentage:
        <input type="text" name="graduationPercentage" value={formData.graduationPercentage} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
