import Number from "./number";
import Symbol from "./symbol";

export default function Buttons({
  setResultat,
  resultat,
  setInvisibleResultat,
  invisibleResultat,
}) {
  const handleClick = (e) => {
    setResultat(resultat.concat(e.target.innerHTML));
    setInvisibleResultat(invisibleResultat.concat(e.target.dataset.number));
  };

  const clear = () => {
    setResultat("");
    setInvisibleResultat("");
  };

  if (resultat === "ERREUR!") {
    setTimeout(function () {
      clear();
    }, 2000);
  }

  return (
    <>
      <div className="pavee_numerique">
        <Number
          clear={clear}
          resultat={resultat}
          setResultat={setResultat}
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
        />
      </div>
    </>
  );
}
