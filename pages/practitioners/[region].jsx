import Footer from '../../components/Footer';
import ImageGrid from '../../components/ImageGrid';
import Navbar from '../../components/NavBar';
import {
    getGlobalData,
    getLocationPaths,
    getRegionByLocation,
} from '../../lib/server-api';

export default function DynamicHelp({ globalData, location, practitioners }) {
    return (
        <>
            <Navbar links={globalData.data.attributes.navLink} />
            <div className='content-page'>
                <div className='container'>
                    <div className='content-split'>
                        <div className='markdown-content'>
                            <h1 className='page-title'>{location}</h1>
                            {practitioners.data.map((a) => (
                                <article
                                    // className='message is-primary'
                                    key={a.id}>
                                    <div
                                    // className='message-body'
                                    >
                                        <h3>
                                            {a.attributes.name}{' '}
                                            <span>
                                                ({a.attributes.qualification})
                                            </span>
                                        </h3>
                                        <p>{a.attributes.address}</p>
                                        <p>{a.attributes.phone}</p>
                                        <p>{a.attributes.email}</p>
                                        <p>{a.attributes.website}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                        <ImageGrid />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export async function getStaticPaths({}) {
    const { data } = await getLocationPaths();
    const paths = data.pages.data.map((a) => ({
        params: { region: a.attributes.location },
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const globalData = await getGlobalData();
    const { data } = await getRegionByLocation({ location: params.region });
    const {
        id,
        attributes: { location, practitioners },
    } = data.pages.data[0];

    return {
        props: {
            globalData: globalData.data.global,
            id,
            location,
            practitioners,
        },
    };
}
