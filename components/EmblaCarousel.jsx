import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    useEffect(() => {
        if (emblaApi) {
            // Embla API is ready
        }
    }, [emblaApi]);

    return (
        <div className='embla' ref={emblaRef}>
            <div className='embla__container'>
                <div className='embla__slide'>
                    {' '}
                    <img src='/images/carousel-1.jpg' alt='' />
                </div>
                <div className='embla__slide'>
                    {' '}
                    <img src='/images/carousel-2.jpg' alt='' />
                </div>
                <div className='embla__slide'>
                    {' '}
                    <img src='/images/carousel-3.jpg' alt='' />
                </div>
            </div>
            <style jsx>{`
                .embla {
                    overflow: hidden;
                }
                .embla__container {
                    display: flex;
                }
                .embla__slide {
                    position: relative;
                    flex: 0 0 100%;
                }
            `}</style>
        </div>
    );
};

export default EmblaCarousel;
