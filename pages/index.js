import Navbar from '../components/NavBar';
import Link from 'next/link';
import Footer from '../components/Footer';
import { getGlobalData } from '../lib/server-api';
// Import css files
import Carousel from '../components/Carousel';
import Head from 'next/head';
export default function Home({ globalData }) {
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
                            Welcome to the homepage of{' '}
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
                                    <Link href={'/feldenkrais-method'}>
                                        <button className='button is-primary is-large'>
                                            Learn more
                                        </button>
                                    </Link>
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
