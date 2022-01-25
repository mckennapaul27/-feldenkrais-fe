import DynamicPage from '../../components/DynamicPage';
import {
    getBenefitBySlug,
    getBenefitPaths,
    getGlobalData,
    getPageBySlug,
    getPagePaths,
} from '../../lib/server-api';

export default function DynamicHelp({ globalData, title, content }) {
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
    const { data } = await getBenefitPaths();
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
    const { data, error } = await getBenefitBySlug({ slug: params.slug });
    const {
        id,
        attributes: { title, content, slug },
    } = data.pages.data[0];
    return {
        props: {
            globalData: globalData.data.global,
            id,
            title,
            slug,
            content,
        },
    };
}
