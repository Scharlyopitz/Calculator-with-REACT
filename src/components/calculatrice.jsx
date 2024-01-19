import Buttons from "./buttons";

import { useState } from "react";

export default function Calculatrice() {
  const [resultat, setResultat] = useState("");

  const [invisibleResultat, setInvisibleResultat] = useState("");

  return (
    <div className="calculatrice">
      <input
        type="text"
        readOnly
        className="calculatrice_resultat"
        value={resultat}
      />
      <Buttons
        setResultat={setResultat}
        resultat={resultat}
        setInvisibleResultat={setInvisibleResultat}
        invisibleResultat={invisibleResultat}
      />
    </div>
  );
}
