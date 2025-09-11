import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { products, IProducts } from './products';

function ProductList() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<IProducts[]>(products);

  useEffect(() => {
    const query = searchParams.get('search') || '';
    setKeyword(query);

    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchParams]);

  const handleSearch = () => {
    navigate(`/products?search=${keyword}`);
  };

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <input
        type="text"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Tìm kiếm sản phẩm..."
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Giá:</strong> {product.price.toLocaleString()}₫</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;