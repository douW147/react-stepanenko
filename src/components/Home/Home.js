import CarouselCustom from '../CarouselCustom/CarouselCustom';
import './Home.css'

export default function Home() {
    return (
        <div className='home-container'>
            <div className='carousel-container'>
                <CarouselCustom />
            </div>
        </div>
    );
}
