import { Link } from "react-router"
import '../css/navbar.css'

const Navbar =()=>{
    return(
        <div className='routes'>
            <Link to='/CANCELED'>Get CANCELED</Link>
            <Link to='Events'>Events</Link>
            <Link to='Socios'>Socios</Link>
            <Link to='Nosotras'>Nosotras</Link>
        </div>
    )
}
export default Navbar