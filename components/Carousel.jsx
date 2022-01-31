import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import carousel1 from '../public/images/carousel-1.jpg';
import Image from 'next/image';

export default function Carousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
        centerPadding: '0',
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        className: 'this-slider',
    };
    return (
        <Slider {...settings}>
            <div>
                <img src='/images/carousel-1.jpg' alt='' />
            </div>
            <div>
                <img src='/images/carousel-2.jpg' alt='' />
            </div>
            <div>
                <img src='/images/carousel-3.jpg' alt='' />
            </div>
            {/* <div>
                <img src='/images/carousel-4.jpg' alt='' />
            </div> */}
        </Slider>
    );
}
