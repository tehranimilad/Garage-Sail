
import { Link } from "react-router-dom"
// Passing props from home, deconstructing props to access the specific product properties
const ProductCard = ({product}) => {
    
   
    return(
        <div className="col s12 m6 l3">
                <div className="card mx-auto" style={{width: '18rem'}}>
                <Link to={"/" + product._id}>
                  <img className="card-img-top" src={product.title}/>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    </div>
                    </Link>
                    <div className="card-body">
                    <p className="card-text">{product.description}</p>
                    
                  </div>
                </div>
        </div>
    )
}

export default ProductCard
