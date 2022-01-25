export default function ImageGrid() {
    return (
        <div className='image-grid'>
            <div className='grid-bg background-1'></div>
            <div className='grid-img image-1'>
                <img
                    src='/images/image-1.jpg'
                    alt='feldenkrais stretch'
                    height={150}
                    width={150}
                />
            </div>
            <div className='grid-bg background-2'></div>
            <div className='grid-img image-2'>
                <img
                    src='/images/image-2.jpg'
                    alt='feldenkrais stretch'
                    height={150}
                    width={150}
                />
            </div>
            <div className='grid-bg background-3'></div>
            <div className='grid-img image-3'>
                <img
                    src='/images/image-3.jpg'
                    alt='feldenkrais stretch'
                    height={150}
                    width={150}
                />
            </div>
            <div className='grid-bg background-4'></div>
            <div className='grid-img image-4'>
                <img
                    src='/images/image-4.jpg'
                    alt='feldenkrais stretch'
                    height={150}
                    width={150}
                />
            </div>
        </div>
    );
}
