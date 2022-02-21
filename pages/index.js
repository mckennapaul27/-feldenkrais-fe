import Navbar from '../components/NavBar';
import Link from 'next/link';
import { getGlobalData } from '../lib/server-api';
// Import css files
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Carousel from '../components/EmblaCarousel';

export default function Home({ globalData }) {
    // const Carousel = dynamic(import('../components/EmblaCarousel'), {
    //     ssr: false,
    // });

    return (
        <>
            <Navbar links={globalData.data.attributes.navLink} />
            <Head>
                <link
                    rel='stylesheet'
                    type='text/css'
                    charSet='UTF-8'
                    href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
                />
                <link
                    rel='stylesheet'
                    type='text/css'
                    href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
                />
            </Head>
            <div className='hero-bg'>
                <div className='container wrapper'>
                    <div className='header'>
                        <h1 className='header-title'>
                            Welcome to{' '}
                            <span className='primary-header'>
                                Feldenkrais Ireland
                            </span>
                            , the association for{' '}
                            <span className='italic-header'>
                                qualified practitioners{' '}
                            </span>
                            in Ireland.
                        </h1>
                        <div className='c-container'>
                            <div className='slider-container'>
                                <Carousel />
                            </div>
                            <div className='c-section'>
                                <div>
                                    <p className='header-subtitle'>
                                        Feldenkrais Ireland was established in
                                        2009 to help develop awareness of the
                                        Feldenkrais Method in Ireland, and as a
                                        central point of contact for Feldenkrais
                                        practitioners around the country.
                                        <br /> <br />
                                        All Feldenkrais Ireland members are
                                        fully certified by the international
                                        Feldenkrais Accreditation Boards
                                        (EuroTAB, NATAB).
                                    </p>
                                </div>
                                <div>
                                    <Link href={'/feldenkrais-method'}>
                                        <button className='button is-primary is-large has-icon'>
                                            <img
                                                src='/learn-icon.svg'
                                                alt='learn'
                                                className='learn-icon'
                                            />
                                            Learn more
                                        </button>
                                    </Link>
                                </div>
                                <div className='links'>
                                    <p>
                                        <span>Popular:</span>
                                        <span>
                                            <Link href='/practitioners/east'>
                                                <a>Practitioners</a>
                                            </Link>
                                        </span>
                                        <span>
                                            <Link href='/feldenkrais-method'>
                                                <a>About the method</a>
                                            </Link>
                                        </span>
                                        <span>
                                            <Link href='/workshops'>
                                                <a>Workshops</a>
                                            </Link>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export async function getStaticProps() {
    const globalData = await getGlobalData();

    return {
        props: {
            globalData: globalData.data.global,
        },
    };
}
