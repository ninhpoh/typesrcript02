import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';

function Exercise04(){
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default Exercise04;