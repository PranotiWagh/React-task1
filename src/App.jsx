// App.js
import React, { useState } from 'react';
import FormComponent from './FormComponent';
import DisplayComponent from './DisplayComponent';
import "./global.css";

const App = () => {
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <FormComponent onSubmit={handleFormSubmit} />
      <DisplayComponent formData={formData} />
    </div>
  );
};

export default App;
