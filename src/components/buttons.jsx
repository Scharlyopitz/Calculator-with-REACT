import Number from "./number";
import Symbol from "./symbol";

export default function Buttons({ setResulat, resultat }) {
  const handleClick = (e) => {
    setResulat(resultat.concat(e.target.dataset.number));
  };
  return (
    <>
      <div className="pavee_numerique">
        <Number
          resultat={resultat}
          setResulat={setResulat}
          handleClick={handleClick}
        />
        <Symbol
          resultat={resultat}
          setResulat={setResulat}
          handleClick={handleClick}
        />
      </div>
    </>
  );
}
