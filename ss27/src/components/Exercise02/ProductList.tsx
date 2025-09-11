import { Link } from "react-router-dom";
import { products } from "./product";

function ProductList() {
  return (
    <div>
      <div className="bg-blue-500 text-amber-50 text-3xl flex items-center justify-center" style={{width:"100%",height:'70px'}}>
        <h1>Trang chi tiet san pham</h1>
      </div>
      <div>
        <h2>Danh sách sản phẩm</h2>
        <div className="flex">
          {products.map((product) => (
            <div key={product.id} className=" bg-stone-100 border-1 rounded-md" style={{width:'250px',margin:'10px' ,padding:'10px'}}>
              <h2 className=" text-2xl">{product.name}</h2>
              <p>{product.description}</p>
              <Link to={`/products/${product.id}` } className=" text-blue-500">Xem chi tiết</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
