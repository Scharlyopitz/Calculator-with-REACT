export default function symbol({ setResultat, resultat, handleClick }) {
  const clearLastNumber = () => {
    setResultat(resultat.slice(0, resultat.length - 1));
  };

  const calculResult = () => {
    try {
      setResultat(eval(resultat).toString());
    } catch (err) {
      setResultat("Erreur!");
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
      <div onClick={clearLastNumber} className="symbol">
        ←
      </div>
    </div>
  );
}
