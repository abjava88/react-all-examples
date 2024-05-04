import React, { useState } from 'react';

function Counter() {
  const [clicks, setClicks] = useState(0);
  console.log(`Start rendering Counter component`);

  return (
    <div>
      <p>Nombre de clics : {clicks}</p>
      <button onClick={() => setClicks(clicks + 1)}>Cliquez ici</button>
    </div>
  );
}

export default Counter;