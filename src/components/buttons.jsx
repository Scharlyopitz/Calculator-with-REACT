import Number from "./number";
import Symbol from "./symbol";

export default function Buttons({ setResulat, resultat }) {
  return (
    <>
      <div className="pavee_numerique">
        <Number resultat={resultat} setResulat={setResulat} />
        <Symbol resultat={resultat} setResulat={setResulat} />
      </div>
    </>
  );
}
