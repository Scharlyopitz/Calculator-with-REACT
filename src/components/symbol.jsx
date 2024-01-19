export default function symbol({
  setResultat,
  resultat,
  handleClick,
  setInvisibleResultat,
  invisibleResultat,
}) {
  const calculResult = () => {
    try {
      setResultat(eval(invisibleResultat).toString());
      setInvisibleResultat(eval(invisibleResultat).toString());
    } catch (err) {
      setResultat("ERREUR!");
      setInvisibleResultat("ERREUR!");
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
