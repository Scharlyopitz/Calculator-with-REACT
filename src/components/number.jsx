export default function number({
  setResultat,
  resultat,
  errorMessage,
  handleClick,
  invisibleResultat,
  setInvisibleResultat,
  deleteResult,
}) {
  const numbers = [".", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reverse();

  const clear = () => {
    setResultat("");
    setInvisibleResultat("");
  };

  const clearLastNumber = () => {
    setResultat(resultat.slice(0, resultat.length - 1));
    setInvisibleResultat(invisibleResultat.slice(0, resultat.length - 1));

    resultat === errorMessage && clear();
    deleteResult && clear();
  };

  return (
    <div className="numbers">
      {numbers.map((number, idx) => {
        return (
          <div
            onClick={handleClick}
            key={idx}
            className="number"
            data-number={number}
          >
            {number}
          </div>
        );
      })}
      <div onClick={clear} className="number">
        C
      </div>
      <div onClick={clearLastNumber} className="symbol clearNumber">
        ←
      </div>
    </div>
  );
}
