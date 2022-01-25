import Footer from './Footer';
import Navbar from './NavBar';
import MarkdownContent from './MarkdownContent';
import ImageGrid from './ImageGrid';

export default function DynamicPage({ title, content, links }) {
    return (
        <>
            <Navbar links={links} />
            <div className='content-page'>
                <div className='container'>
                    <div className='content-split'>
                        <div className='markdown-content'>
                            <h1 className='page-title'>{title}</h1>
                            <MarkdownContent body={content} />
                        </div>
                        <ImageGrid />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
