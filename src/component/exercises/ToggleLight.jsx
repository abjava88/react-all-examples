import React, { useState } from "react";

function ToggleLight() {
  // Declare a new state variable called "isOn"
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <p>The light is {isOn ? <strong>on</strong> : <strong>off</strong>}</p>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}

export default ToggleLight;
