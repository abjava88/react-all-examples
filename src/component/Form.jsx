// Form.js
import React from 'react';
import Button from './Button'; // Import the Button component

const Form = () => {
  return (
    <div>
      <h2>Form Component</h2>
      <Button onClick={() => console.log('Button 1 clicked')} text="Button 1" />
      <Button onClick={() => console.log('Button 2 clicked')} text="Button 2" />
      <Button onClick={() => console.log('Button 3 clicked')} text="Button 3" />
    </div>
  );
};

export default Form;