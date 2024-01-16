export default function number({ setResultat, resultat, handleClick }) {
  const numbers = [".", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reverse();

  const clear = () => {
    setResultat("");
  };

  const clearLastNumber = () => {
    setResultat(resultat.slice(0, resultat.length - 1));
  };

  return (
    <div className="numbers">
      {numbers.map((number, idx) => {
        return (
          <div
            onClick={(e) => handleClick(e)}
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
      <div onClick={clearLastNumber} className="symbol">
        ←
      </div>
    </div>
  );
}
