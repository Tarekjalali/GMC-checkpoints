
import './App.css';
import Description from './Components/Description';
import Image from './Components/Image';
import Name from './Components/Name';
import Price from './Components/Price';

import Card from 'react-bootstrap/Card';


function App() {
  return (
   <div>
     
      <Card style={{ width: '18rem' }}>
      <Image/>
      <Card.Body>
        <Name/>
        <Description/>
        <Price/>
        
      </Card.Body>
    </Card>

   </div>
  );
}

export default App;
