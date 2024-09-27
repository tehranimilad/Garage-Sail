
import { getAllProducts } from "../../utils/api";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import '../../../src/index.css'
import Carousel from 'react-bootstrap/Carousel';
import './home.css'




const Home = () => {
    
    const [productList, setProductList] = useState([])

    
    //  Grabs all the products in the database and updates the state of our productlist with that data
    useEffect(() => {

      getAllProducts()
        .then(data => setProductList(data))
        .catch(err => alert("Could not load products"))
      
      },[])

    

    return (
      <main>
        

        <div className="row">
    <div className="col-md-8 mx-auto">

    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/d1Rh0ZP7/ab.jpg"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/XJBZ61xg/ny.jpg"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/YqKrhCqk/sale.jpg"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>




        </div>
        </div>

        <div className="row">
        {/* Maps over the Product List array and renders a product card component for each product */}

          {productList.map((product, i) => {
            return(
              
              <ProductCard product={product} key={i} />
              
              
            );
          }
          )
        }

       </div>
      </main>
    );
}

export default Home;