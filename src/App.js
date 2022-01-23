import './App.css';

// Import Bootstrap components
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel'

function App() {
  return (
    <div className="App">
      <h1>Nuova-Store</h1>
      <Button variant="primary">Primary</Button>{' '}
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/id/1/1920/800"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/id/1015/1920/800"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/id/1025/1920/800"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
