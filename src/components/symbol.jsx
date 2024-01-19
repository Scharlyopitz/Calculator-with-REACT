export default function symbol({ handleClick, calculResult }) {
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
