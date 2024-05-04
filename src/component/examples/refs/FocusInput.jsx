import React, { useRef, useEffect } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h2>Exemple d'utilisation des refs</h2>
      <input type="text" ref={inputRef} />
      <p>
        Le champ de texte sera automatiquement mis en surbrillance lors de
        l'affichage du composant.
      </p>
    </div>
  );
};

export default FocusInput;
