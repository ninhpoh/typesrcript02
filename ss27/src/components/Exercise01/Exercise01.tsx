import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function Exercise01() {
  return (
    <Router>
      <nav>
        <div className=' bg-blue-500 text-amber-50 text-[20px] flex items-center justify-around' style={{width:'100%',height:'50px'}}>
            <NavLink to="/" className={({ isActive })=>(isActive?"underline":"")}>Trang chủ</NavLink> 
            <NavLink to="/about" className={({ isActive })=>(isActive?"underline":"")}>Giới thiệu</NavLink>
             <NavLink to="/contact" className={({ isActive })=>(isActive?"underline":"")}> Contact</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default Exercise01;