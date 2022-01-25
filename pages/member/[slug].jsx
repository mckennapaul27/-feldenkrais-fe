import {
    getGlobalData,
    getMemberBySlug,
    getMemberPaths,
} from '../../lib/server-api';
import DynamicPage from '../../components/DynamicPage';

export default function DynamicMember({ globalData, title, content }) {
    return (
        <>
            <DynamicPage
                title={title}
                content={content}
                links={globalData.data.attributes.navLink}
            />
        </>
    );
}

export async function getStaticPaths({}) {
    const { data } = await getMemberPaths();
    const paths = data.pages.data.map((a) => ({
        params: { slug: a.attributes.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const globalData = await getGlobalData();
    const { data } = await getMemberBySlug({ slug: params.slug });

    const {
        id,
        attributes: { name, profile, slug },
    } = data.pages.data[0];
    return {
        props: {
            globalData: globalData.data.global,
            id,
            title: name,
            slug,
            content: profile,
        },
    };
}
