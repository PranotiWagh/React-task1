// DisplayComponent.js
import React from 'react';

const DisplayComponent = ({ formData }) => {
  return (
    <div>
      <h2>User Input Displayed:</h2>
      <p>Name: {formData.name}</p>
      <p>College: {formData.college}</p>
      <p>Branch: {formData.branch}</p>
      <p>10th Percentage: {formData.tenthPercentage}</p>
      <p>12th Percentage: {formData.twelfthPercentage}</p>
      <p>Graduation Percentage: {formData.graduationPercentage}</p>
    </div>
  );
};

export default DisplayComponent;
