export default function symbol({ setResulat, resultat }) {
  const calcul = ["=", "+", "-", "×", "	÷"].reverse();

  const clearLastNumber = () => {
    setResulat(resultat.slice(0, resultat.length - 1));
  };
  return (
    <div className="calcul">
      {calcul.map((symbol, idx) => {
        return (
          <div key={idx} className="symbol">
            {symbol}
          </div>
        );
      })}
      <div onClick={clearLastNumber} className="symbol">
        ←
      </div>
    </div>
  );
}
