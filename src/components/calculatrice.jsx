import Buttons from "./buttons";

import { useState } from "react";

export default function Calculatrice() {
  const [resultat, setResulat] = useState("");

  return (
    <div className="calculatrice">
      <input
        type="text"
        readOnly
        className="calculatrice_resultat"
        value={resultat}
      />
      <Buttons setResulat={setResulat} resultat={resultat} />
    </div>
  );
}
