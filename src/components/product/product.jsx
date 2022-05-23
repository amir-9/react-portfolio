import "./product.css";

const Product = (props) => {
  console.log(props);
  return (
    <div className="p">
      <div className="p-browser">
        <span className="p-circle"></span>
        <span className="p-circle"></span>
        <span className="p-circle"></span>
      </div>
      <div className="p-card">
        <div className="p-card-img">
          <a href={props.link} className="p-link">
            <img src={props.image} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
