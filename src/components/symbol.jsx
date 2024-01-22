export default function symbol({ handleClick, calculResult, setDeleteResult }) {
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
      <div
        onClick={() => {
          calculResult();
          setDeleteResult(true);
        }}
        className="symbol"
      >
        =
      </div>
    </div>
  );
}
