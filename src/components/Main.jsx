import { Link } from "react-router"
import '../css/main.css'
const Main =()=>{
    return(
    <>
    <div className="members">
        <Link to='/alayna'>ALAYNA</Link>
        <Link to='/bruna'>BRUNA</Link>
        <Link to='/joline'>JOLINE</Link>
        <Link to='/aitana'>AITANA</Link>
        <Link to='/haruko'>HARUKO</Link>
        <Link to='/giovanna'>GIOVANNA</Link>
        <Link to='/evangelina'>EVANGELINA</Link>
    </div>
    </>
    )
}

export default Main