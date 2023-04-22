import CarouselCustom from '../CarouselCustom/CarouselCustom';
import './Home.css'
import Container from 'react-bootstrap/esm/Container';

export default function Home() {
    return (
        <div className='home-container'>
            <Container>
                <CarouselCustom />
            </Container>
        </div>
    );
}
