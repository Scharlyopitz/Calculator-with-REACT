export default function symbol({ setResulat, resultat, handleClick }) {
  const clearLastNumber = () => {
    setResulat(resultat.slice(0, resultat.length - 1));
  };

  const calculResult = () => {
    try {
      setResulat(eval(resultat).toString());
    } catch (err) {
      setResulat("Erreur!");
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
