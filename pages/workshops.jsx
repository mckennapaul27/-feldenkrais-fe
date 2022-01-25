import { getGlobalData, getWorkshops } from '../lib/server-api';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import ImageGrid from '../components/ImageGrid';

export default function Page({ globalData, workshops }) {
    return (
        <>
            <Navbar links={globalData.data.attributes.navLink} />
            <div className='content-page'>
                <div className='container'>
                    <div className='content-split'>
                        <div className='markdown-content'>
                            <h1 className='page-title'>Workshops</h1>
                            <div>
                                {workshops.map((a) => (
                                    <div key={a.id}>
                                        <p>{a.attributes.date}</p>
                                        <p>{a.attributes.workshopName}</p>
                                        <p>{a.attributes.contactName}</p>
                                        <p>{a.attributes.contactEmail}</p>
                                        <p>{a.attributes.contactNumber}</p>
                                        <p>{a.attributes.facebookLink}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <ImageGrid />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export async function getStaticProps({ params }) {
    const globalData = await getGlobalData();
    const { data } = await getWorkshops();
    return {
        props: {
            globalData: globalData.data.global,
            workshops: data.workshops.data,
        },
    };
}
