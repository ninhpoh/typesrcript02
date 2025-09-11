import { Link, useParams } from 'react-router-dom';
import { products } from './product';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <p>Sản phẩm không tồn tại.</p>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p><strong>Giá:</strong> {product.price}</p>
      <p>{product.description} Sản phẩm phù hợp với nhiều đối tượng sử dụng, mang lại sự thoải mái và phong cách.</p>
      <Link to="/products">Quay lai trang san pham</Link>
    </div>
  );
}

export default ProductDetail;