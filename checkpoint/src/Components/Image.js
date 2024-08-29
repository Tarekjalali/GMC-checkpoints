import Product from "../Product"
import Card from 'react-bootstrap/Card';

const Image=()=>{
    return (
      
        <Card.Img variant="top" src={Product.url} />
      
    )
}

export default Image