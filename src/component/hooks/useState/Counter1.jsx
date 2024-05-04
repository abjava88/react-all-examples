import React from 'react'

const Counter1 = ({intialCount = 0}) => {
    console.log(`Start rendering Counter1 component`);
    return (
      <div>
        <p>Nombre de clics : {intialCount}</p>
      </div>
    );
}

export default Counter1