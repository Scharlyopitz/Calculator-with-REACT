import Number from "./number";
import Symbol from "./symbol";

import { useState } from "react";

export default function Buttons({ setResultat, resultat }) {
  const [invisibleResultat, setInvisibleResultat] = useState("");

  const [deleteResult, setDeleteResult] = useState(false);

  const errorMessage = "ERREUR!";

  const handleClick = (e) => {
    setDeleteResult(false);

    setResultat(resultat.concat(e.target.innerHTML));
    setInvisibleResultat(invisibleResultat.concat(e.target.dataset.number));

    resultat === errorMessage && setResultat(e.target.innerHTML);
    resultat === errorMessage && setInvisibleResultat(e.target.dataset.number);

    deleteResult && setResultat(e.target.innerHTML);
    deleteResult && setInvisibleResultat(e.target.dataset.number);
  };

  const clear = () => {
    setResultat("");
    setInvisibleResultat("");
  };

  const calculResult = () => {
    try {
      setResultat(eval(invisibleResultat).toString());
      setInvisibleResultat(eval(invisibleResultat).toString());
    } catch (err) {
      setResultat(errorMessage);
      setInvisibleResultat(errorMessage);
    }
  };

  return (
    <>
      <div className="pavee_numerique">
        <Number
          clear={clear}
          resultat={resultat}
          setResultat={setResultat}
          errorMessage={errorMessage}
          handleClick={handleClick}
          setInvisibleResultat={setInvisibleResultat}
          invisibleResultat={invisibleResultat}
        />
        <Symbol
          resultat={resultat}
          setResultat={setResultat}
          handleClick={handleClick}
          setInvisibleResultat={setInvisibleResultat}
          invisibleResultat={invisibleResultat}
          calculResult={calculResult}
          setDeleteResult={setDeleteResult}
        />
      </div>
    </>
  );
}
