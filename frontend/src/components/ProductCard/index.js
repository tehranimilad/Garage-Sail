import { Link } from "react-router-dom"
const ProductCard = ({product}) => {
    
   
    return(
        <div className="col s12 m6 l3">
            
                <div className="card" style={{width: '18rem'}}>
                <Link to={"/product/" + product._id}>
                  <img className="card-img-top" src={product.image} alt={product.title} />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    </div>
                    </Link>
                    <div className="card-body">
                    <p className="card-text">{product.description}</p>
                    <h6 className="card-text">${product.price}</h6>
                    <h1>{product._id}</h1>
                  </div>
                </div>
        </div>
    )
}

export default ProductCard