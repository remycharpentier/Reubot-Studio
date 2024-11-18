import us from "../../assets/img/us.png";
import fr from "../../assets/img/fr.png";
import de from "../../assets/img/de.png";
import es from "../../assets/img/es.png";
import it from "../../assets/img/it.png";
import ch from "../../assets/img/ch.png";

const usFlag = <img src={us} alt="" className="flag" />;
const frFlag = <img src={fr} alt="" className="flag" />;
const deFlag = <img src={de} alt="" className="flag" />;
const esFlag = <img src={es} alt="" className="flag" />;
const itFlag = <img src={it} alt="" className="flag" />;
const chFlag = <img src={ch} alt="" className="flag" />;

export default function Flag() {
  const countryFlags = [
    { id: 1, name: usFlag },
    { id: 2, name: frFlag },
    { id: 3, name: deFlag },
    { id: 4, name: esFlag },
    { id: 5, name: itFlag },
    { id: 6, name: chFlag },
  ];

  return (
    <>
      <ul>
        {countryFlags.map((item) => (
          <li key={item.id}>
            <a href="#">{item.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
