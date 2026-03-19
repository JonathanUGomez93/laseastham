import { Link } from "react-router";
import '../css/main.css';

const Main = () => {
  return (
    <div className="bgContainer">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4" /></video>
      <div className="members">
        <Link to="/alayna">ALAYNA</Link>
        <Link to="/bruna">BRUNA</Link>
        <Link to="/joline">JOLINE</Link>
        <Link to="/aitana">AITANA</Link>
        <Link to="/haruko">HARUKO</Link>
        <Link to="/giovanna">GIOVANNA</Link>
        <Link to="/evangelina">EVANGELINA</Link>
      </div>
    </div>
  );
};
export default Main;