
import Card from 'react-bootstrap/Card';

const CardPlayer =({el})=>{
    return(
        <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={el.url} style={{width:"286px", height:"347px"}} />
            <Card.Body>
                <Card.Title>{el.name}</Card.Title>
                <Card.Text>
                    {el.team}
                    <br/>
                    {el.nationality}
                    <br/>
                    {el.Number}
                    <br/>
                    {el.age}
                    <br/>
                </Card.Text>
            </Card.Body>
    </Card>
        </div>
    )
}
CardPlayer.defaultProps={
    el:{
        "name":"Nizar",
        "team":"Marsa",
        "nationality":"Tunisian",
        "Number":1,
        "age":35,
        "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0T-bJkTfYQgt_NEaKrpkc366kkSNeDVTEg&s"
    }
}
export default CardPlayer