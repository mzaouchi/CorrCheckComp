import './App.css';
import Description from './Components/Description';
import Name from './Components/Name';
import Pic from './Components/Pic';
import Price from './Components/Price';
import {Button,Card} from "react-bootstrap"
import products from './products';
// import products from './products';

function App() {
  // var s = "Sirine"
  // var user = {
  //   name : "Mohamed",
  //   city : "La Marsa",
  //   dog : "King"
  // }
  // const Somme=(a,b)=>a+b

  var name = "Rahma"
  return (
    <div>
      {/* <h1>{s}</h1>
      <h2>My name : {user.name}</h2>
      <h3>My city is : {user.city}</h3>
      <h4>My dog name : {user.dog}</h4>
      <h1>{6+5}</h1>
      <h1>{Somme(4,9)}</h1> */}

      {/* <h1>{products.name}</h1>
      <img src={products.URL} alt='Not Found'/> */}
      {/* <Name/>
      <Description/>
      <Price/>
      <Pic/> */}

<Card style={{ width: '18rem' }}>
      {/* <Card.Img style={{    height: "100px",    width: "59px"}}  variant="top" src={products.URL} /> */}
      <Pic/>
      <Card.Body>
        <Card.Title> <Name/></Card.Title>
       
        <Card.Text>
          <Description/>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <h1>{name == "" ? "Hello There !!! " : `Hello ${name}`}</h1>
    </div>
  );
}

export default App;
