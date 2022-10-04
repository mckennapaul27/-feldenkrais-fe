import Footer from '../../components/Footer';
import ImageGrid from '../../components/ImageGrid';
import Navbar from '../../components/NavBar';
import {
    getClassesByRegion,
    getGlobalData,
    getLocationPaths,
} from '../../lib/server-api';

export default function DynamicHelp({ globalData, location, classes }) {
    classes.data.map((a) => {
        a.attributes.start = Number(a.attributes.startTime.slice(0, 2));

        return a;
    });
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
                                classes={classes.data
                                    .filter(
                                        (a) =>
                                            a.attributes.dayOfWeek === 'Monday'
                                    )
                                    .sort(
                                        (a, b) =>
                                            a.attributes.start -
                                            b.attributes.start
                                    )}
                            />

                            <ClassBox
                                day={'Tuesday'}
                                classes={classes.data
                                    .filter(
                                        (a) =>
                                            a.attributes.dayOfWeek === 'Tuesday'
                                    )
                                    .sort(
                                        (a, b) =>
                                            a.attributes.start -
                                            b.attributes.start
                                    )}
                            />

                            <ClassBox
                                day={'Wednesday'}
                                classes={classes.data
                                    .filter(
                                        (a) =>
                                            a.attributes.dayOfWeek ===
                                            'Wednesday'
                                    )
                                    .sort(
                                        (a, b) =>
                                            a.attributes.start -
                                            b.attributes.start
                                    )}
                            />

                            <ClassBox
                                day={'Thursday'}
                                classes={classes.data
                                    .filter(
                                        (a) =>
                                            a.attributes.dayOfWeek ===
                                            'Thursday'
                                    )
                                    .sort(
                                        (a, b) =>
                                            a.attributes.start -
                                            b.attributes.start
                                    )}
                            />

                            <ClassBox
                                day={'Friday'}
                                classes={classes.data
                                    .filter(
                                        (a) => a.attributes.dayOfWeek === ''
                                    )
                                    .sort(
                                        (a, b) =>
                                            a.attributes.start -
                                            b.attributes.start
                                    )}
                            />

                            <ClassBox
                                day={'Saturday'}
                                classes={classes.data
                                    .filter(
                                        (a) =>
                                            a.attributes.dayOfWeek ===
                                            'Saturday'
                                    )
                                    .sort(
                                        (a, b) =>
                                            a.attributes.start -
                                            b.attributes.start
                                    )}
                            />

                            <ClassBox
                                day={'Sunday'}
                                classes={classes.data
                                    .filter(
                                        (a) =>
                                            a.attributes.dayOfWeek === 'Sunday'
                                    )
                                    .sort(
                                        (a, b) =>
                                            a.attributes.start -
                                            b.attributes.start
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

const ClassBox = ({ classes, day }) => {
    // if (day === 'Monday') {
    //     console.log(classes);
    // }
    return (
        <>
            {classes.length > 0 ? (
                <>
                    <h3 className='day'>{day}</h3>

                    {classes.map((a) => (
                        <article className='message is-primary' key={a.id}>
                            <div className='message-body'>
                                <p className='date-time'>
                                    {a.attributes.startTime.slice(0, 5)} -{' '}
                                    {a.attributes.endTime.slice(0, 5)}
                                </p>

                                <h3>
                                    {
                                        a.attributes.people.data[0].attributes
                                            .name
                                    }{' '}
                                    {a.attributes.people.data[0].attributes
                                        .qualification && (
                                        <span>
                                            (
                                            {
                                                a.attributes.people.data[0]
                                                    .attributes.qualification
                                            }
                                            )
                                        </span>
                                    )}
                                </h3>
                                <p>
                                    {
                                        a.attributes.people.data[0].attributes
                                            .address
                                    }
                                </p>
                                <p>
                                    {
                                        a.attributes.people.data[0].attributes
                                            .phone
                                    }
                                </p>
                                <p>
                                    {
                                        a.attributes.people.data[0].attributes
                                            .email
                                    }
                                </p>
                                <p>
                                    {
                                        a.attributes.people.data[0].attributes
                                            .website
                                    }
                                </p>
                                <p className='notes'>
                                    Notes: {a.attributes.extraNotes}
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
};
