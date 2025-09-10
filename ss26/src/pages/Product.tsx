import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <p>Id = {id}</p>
    </>
  );
}

export default Product;