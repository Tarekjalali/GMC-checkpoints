import Product from "../Product"
import Card from 'react-bootstrap/Card';

const Description=()=>{
    return (
        <Card.Text>
         {Product.Description}
        </Card.Text>
    )
}

export default Description