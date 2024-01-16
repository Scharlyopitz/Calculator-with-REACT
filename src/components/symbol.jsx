export default function symbol({ setResultat, resultat, handleClick }) {
  const calculResult = () => {
    try {
      setResultat(eval(resultat).toString());
    } catch (err) {
      setResultat("ERREUR!");
    }
  };

  return (
    <div className="calcul">
      <div onClick={handleClick} data-number="/" className="symbol">
        ÷
      </div>
      <div onClick={handleClick} data-number="*" className="symbol">
        ×
      </div>
      <div onClick={handleClick} data-number="-" className="symbol">
        -
      </div>
      <div onClick={handleClick} data-number="+" className="symbol">
        +
      </div>
      <div onClick={calculResult} className="symbol">
        =
      </div>
    </div>
  );
}
