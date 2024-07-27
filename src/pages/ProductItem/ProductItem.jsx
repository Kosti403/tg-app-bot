import PropTypes from "prop-types";
import "./ProductItem.css";
import { Button } from "../../shared/ui/button/button";

const ProductItem = ({ product, className, onAdd }) => {
  const onAddHandler = () => {
    onAdd(product);
  };

  return (
    <div className={"product " + className}>
      <div className="image"><img src={product.imageUrl} alt="" /></div>
      <div className="title">{product.title}</div>
      <div className="description">{product.description || "No description available"}</div>
      <div className="price">
        <span>
          Стоимость: <b>{product.price}</b>
        </span>
      </div>
      <Button className="add-btn" onClick={onAddHandler}>
        Добавить в корзину
      </Button>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string, 
    price: PropTypes.number.isRequired,
  }).isRequired,
  className: PropTypes.string,
  onAdd: PropTypes.func.isRequired,
};

export default ProductItem;
