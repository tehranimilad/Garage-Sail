import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { showOneProduct } from "../../utils/api"



const ShowProduct = () => {
    

    const [showProductData, setShowProductData] = useState({})
   
    
    

    const {id} = useParams()
  
    useEffect(() => {
        showOneProduct(id).then(data => {setShowProductData(data)})
    }, [id])



    return(
        <>
        <div className="row">
            <div className="col-sm-10">
                <Card style={{width: "80%"}} className="mx-auto">
                <Card.Img src={showProductData.image} variant="top" className="mx-auto" style={{height:"90%", width:"70%"}}/>
                <Card.Body>
                <Card.Title>{showProductData.title}</Card.Title>
                <Card.Text>{showProductData.description}</Card.Text>
                <Card.Text>Location: {showProductData.location}</Card.Text>
                <Card.Text>Price: $ {showProductData.price}</Card.Text>
                <Card.Text>Contact Info: {showProductData.contact}</Card.Text>
                </Card.Body>
                </Card>
            </div>
        </div>
        </>
    )
}
export default ShowProduct