import Navbar from '../components/NavBar';
import Link from 'next/link';
import Footer from '../components/Footer';
import { getGlobalData } from '../lib/server-api';

export default function Home({ globalData }) {
    return (
        <>
            <Navbar links={globalData.data.attributes.navLink} />
            <div className='hero-bg'>
                <div className='container'>
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
                        <p className='header-subtitle'>
                            Feldenkrais Ireland was established in 2009 to help
                            develop awareness of the Feldenkrais Method in
                            Ireland, and as a central point of contact for
                            Feldenkrais practitioners around the country.
                            <br /> <br />
                            All Feldenkrais Ireland members are fully certified
                            by the international Feldenkrais Accreditation
                            Boards (EuroTAB, NATAB).
                        </p>
                        <Link href={'/feldenkrais-method'}>
                            <button className='button is-primary is-large'>
                                Learn more
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
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
