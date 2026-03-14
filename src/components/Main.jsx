import { Link } from "react-router";
import '../css/main.css';

const Main = () => {
  const setBodyBackground = (url) => {
    document.body.style.backgroundImage = `url(${url})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.transition = "background-image 1s ease-in-out";
  };
  const resetBodyBackground = () => {
    document.body.style.backgroundImage = "";
    document.body.style.transition = "background-image 1s ease-in-out";
  };

  return (
    <div className="members">
      <Link to="/alayna" onMouseEnter={() => setBodyBackground("/images/alayna.jpg")} onMouseLeave={resetBodyBackground}>ALAYNA</Link>
      <Link to="/bruna" onMouseEnter={() => setBodyBackground('/images/bruna.jpg')} onMouseLeave={resetBodyBackground}>BRUNA</Link>
      <Link to="/joline" onMouseEnter={() => setBodyBackground('/images/joline.jpg')} onMouseLeave={resetBodyBackground}>JOLINE</Link>
      <Link to="/aitana" onMouseEnter={() => setBodyBackground('/images/aitana.jpg')}onMouseLeave={resetBodyBackground}>AITANA</Link>
      <Link to="/haruko" onMouseEnter={() => setBodyBackground('/images/haruko.jpg')} onMouseLeave={resetBodyBackground}>HARUKO</Link>
      <Link to="/giovanna" onMouseEnter={() => setBodyBackground('/images/giovanna.jpg')} onMouseLeave={resetBodyBackground}>GIOVANNA</Link>
      <Link to="/evangelina" onMouseEnter={() => setBodyBackground('/images/evangelina.jpg')} onMouseLeave={resetBodyBackground}>EVANGELINA</Link>
    </div>
  );
};

export default Main;
