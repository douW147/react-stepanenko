import "./CarouselCustom.css";
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselCustom() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block slider-image w-100" src="https://picsum.photos/id/237/800/800" alt="First slide"/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block slider-image w-100" src="https://picsum.photos/id/238/800/800" alt="Second slide"/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block slider-image w-100" src="https://picsum.photos/id/239/800/800" alt="Third slide"/>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
