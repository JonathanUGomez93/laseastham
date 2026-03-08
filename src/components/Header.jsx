import Navbar from './Navbar'
import { Link } from 'react-router'
import '../css/header.css'

const Header=()=>{
    return(
    <>
        <div className='nav'>
            <div className='logo'>
                <Link to='/'><img src="/images/logo.png" alt=""/></Link>
            </div>
            <Navbar/>
        </div>
    </>
    )
}
export default Header