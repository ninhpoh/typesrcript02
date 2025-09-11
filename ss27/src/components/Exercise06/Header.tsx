import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink 
        to="/" 
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'black',
          textDecoration: 'none',
          marginRight: '10px'
        })}
      >
        Home
      </NavLink>

      <NavLink 
        to="/product" 
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'black',
          textDecoration: 'none',
          marginRight: '10px'
        })}
      >
        Product
      </NavLink>

      <NavLink 
        to="/detail" 
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'black',
          textDecoration: 'none'
        })}
      >
        Detail
      </NavLink>
    </nav>
  );
};
export default Header;