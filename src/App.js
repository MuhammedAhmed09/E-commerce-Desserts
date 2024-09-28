import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';
import Main from './components/Main';
import ShoppingProvider from './context';



function App() {
  
  return (
    <ShoppingProvider>
        <Container>

          <Row>
            <Col lg={8} sm={7}>
              <Main />
            </Col>
            <Col lg={4} sm={5}>
              <Cart />
            </Col> 
          </Row>

        </Container>
    </ShoppingProvider>
  );
}

export default App;
