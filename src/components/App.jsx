import { BrowserRouter } from "react-router"
//import CustomProvider from "./CustomProvider"
import Header from './Header'
import Main from './Main'
//import Footer from './Footer'
import '../css/app.css'

function App() {
  return (
    // <CustomProvider>
    //   <BrowserRouter>
    //   </BrowserRouter>
    // </CustomProvider>
    <BrowserRouter>
      <Header/>
      <Main/>
    </BrowserRouter>
  )
}
export default App