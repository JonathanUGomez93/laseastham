import Navbar from './Navbar'
import '../css/header.css'

const Header=()=>{
    return(
    <>
        <div className='nav'>
            <div className='logo'>
                <img src="/images/logo.png" alt=""/>
            </div>
        </div>
        <Navbar/>
    </>
    )
}
export default Header