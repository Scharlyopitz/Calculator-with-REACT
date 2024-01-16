import Number from "./number";
import Symbol from "./symbol";

export default function Buttons({ setResultat, resultat }) {
  const handleClick = (e) => {
    setResultat(resultat.concat(e.target.dataset.number));
  };
  return (
    <>
      <div className="pavee_numerique">
        <Number
          resultat={resultat}
          setResultat={setResultat}
          handleClick={handleClick}
        />
        <Symbol
          resultat={resultat}
          setResultat={setResultat}
          handleClick={handleClick}
        />
      </div>
    </>
  );
}
