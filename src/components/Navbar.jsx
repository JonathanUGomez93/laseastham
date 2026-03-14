import { Link } from "react-router"
import '../css/navbar.css'

const Navbar =()=>{
    return(
        <div className='routes'>
            <Link to='Nosotras'>Nosotras</Link>
            <Link to='/CANCELED'>Get CANCELED</Link>
            <Link to='Events'>Events</Link>
            <Link to='Socios'>Socios</Link>
        </div>
    )
}
export default Navbar