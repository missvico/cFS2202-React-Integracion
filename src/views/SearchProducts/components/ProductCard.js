function ProductCard({product}) {
  return (
    <div className="card">
      <img src={product.image_link} classNameName="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">
          {product.description}
        </p>
        <a href="#" className="btn btn-primary">
          See More
        </a>
      </div>
    </div>
  );
}

export default ProductCard
