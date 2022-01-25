import Footer from '../../components/Footer';
import ImageGrid from '../../components/ImageGrid';
import Navbar from '../../components/NavBar';
import {
    getClassesByRegion,
    getGlobalData,
    getLocationPaths,
} from '../../lib/server-api';

export default function DynamicHelp({ globalData, location, classes }) {
    return (
        <>
            <Navbar links={globalData.data.attributes.navLink} />
            <div className='content-page'>
                <div className='container'>
                    <div className='content-split'>
                        <div className='markdown-content'>
                            <h1 className='page-title'>{location}</h1>

                            <ClassBox
                                day={'Monday'}
                                classes={classes.data.filter(
                                    (a) => a.attributes.dayOfWeek === 'Monday'
                                )}
                            />

                            <ClassBox
                                day={'Tuesday'}
                                classes={classes.data.filter(
                                    (a) => a.attributes.dayOfWeek === 'Tuesday'
                                )}
                            />

                            <ClassBox
                                day={'Wednesday'}
                                classes={classes.data.filter(
                                    (a) =>
                                        a.attributes.dayOfWeek === 'Wednesday'
                                )}
                            />

                            <ClassBox
                                day={'Thursday'}
                                classes={classes.data.filter(
                                    (a) => a.attributes.dayOfWeek === 'Thursday'
                                )}
                            />

                            <ClassBox
                                day={'Friday'}
                                classes={classes.data.filter(
                                    (a) => a.attributes.dayOfWeek === ''
                                )}
                            />

                            <ClassBox
                                day={'Saturday'}
                                classes={classes.data.filter(
                                    (a) => a.attributes.dayOfWeek === 'Saturday'
                                )}
                            />

                            <ClassBox
                                day={'Sunday'}
                                classes={classes.data.filter(
                                    (a) => a.attributes.dayOfWeek === 'Sunday'
                                )}
                            />
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
    const { data } = await getClassesByRegion({ location: params.region });
    const {
        id,
        attributes: { location, classes },
    } = data.pages.data[0];
    return {
        props: {
            globalData: globalData.data.global,
            id,
            location,
            classes,
        },
    };
}

const ClassBox = ({ classes, day }) => (
    <>
        {classes.length > 0 ? (
            <>
                <h3>{day}</h3>

                {classes.map((a) => (
                    <article className='message is-primary' key={a.id}>
                        <div className='message-body'>
                            <p>
                                {a.attributes.startTime.slice(0, 5)} -{' '}
                                {a.attributes.endTime.slice(0, 5)}
                            </p>
                            <p>{a.attributes.extraNotes}</p>
                            <h3>
                                {a.attributes.people.data[0].attributes.name}{' '}
                                <span>
                                    (
                                    {
                                        a.attributes.people.data[0].attributes
                                            .qualification
                                    }
                                    )
                                </span>
                            </h3>
                            <p>
                                {a.attributes.people.data[0].attributes.address}
                            </p>
                            <p>
                                {a.attributes.people.data[0].attributes.phone}
                            </p>
                            <p>
                                {a.attributes.people.data[0].attributes.email}
                            </p>
                            <p>
                                {a.attributes.people.data[0].attributes.website}
                            </p>
                        </div>
                    </article>
                ))}
            </>
        ) : (
            <></>
        )}
    </>
);
