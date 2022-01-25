import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';
import Markdown from 'markdown-to-jsx';

const NextImage = ({ children, ...props }) => {
    const { alt, width, height, src } = props;
    const imgId = src
        .split('')
        .slice(src.lastIndexOf('/') + 1, src.lastIndexOf('.'))
        .join('');

    const url = buildUrl(imgId, {
        cloud: {
            cloudName: 'dohhxsjei',
        },
    });
    const urlBlurred = buildUrl(imgId, {
        cloud: {
            cloudName: 'dohhxsjei',
        },
        transformations: {
            effect: 'blur:250',
            quality: 1,
        },
    });

    return (
        <div
            style={{
                maxWidth: `${width}px`,
                display: 'block',
                paddingBottom: '26px',
            }}>
            <div
                style={{
                    position: 'relative',
                    height: 0,
                    paddingTop: `${(height / width) * 100}%`,
                    backgroundImage: `url(${urlBlurred})`,
                    backgroundPosition: 'center center',
                    backgroundSize: '100%',
                }}>
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                    }}>
                    <div
                        style={{
                            // need this extra wrapper so that we provide Image with relative parent
                            position: 'relative',
                            height: '100%',
                            width: '100%',
                        }}>
                        <Image src={url} alt={alt} layout='fill' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function MarkdownContent({ body }) {
    return (
        <div className={'markdown-content'}>
            <Markdown>{body}</Markdown>
        </div>
    );
}

// below is if we want the image to spread 100% of the page

// const NextImage = ({ children, ...props }) => {
//     const { alt, width, height, src } = props;
//     const imgId = src
//         .split('')
//         .slice(src.lastIndexOf('/') + 1, src.lastIndexOf('.'))
//         .join('');

//     const url = buildUrl(imgId, {
//         cloud: {
//             cloudName: 'dohhxsjei',
//         },
//     });
//     const urlBlurred = buildUrl(imgId, {
//         cloud: {
//             cloudName: 'dohhxsjei',
//         },
//         transformations: {
//             effect: 'blur:250',
//             quality: 1,
//         },
//     });

//     const [image, setImage] = useState();

//     useEffect(() => {
//         setTimeout(() => {
//             setImage(url);
//         }, 2000);
//     }, []);

//     return (
//         <div
//             style={{
//                 // maxWidth: `${width}px`,
//                 display: 'block',
//                 paddingBottom: '26px',
//             }}>
//             <div
//                 style={{
//                     position: 'relative',
//                     height: 0,
//                     paddingTop: `${(height / width) * 100}%`,
//                     backgroundImage: `url(${urlBlurred})`,
//                     backgroundPosition: 'center center',
//                     backgroundSize: '100%',
//                 }}>
//                 <div
//                     style={{
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         height: '100%',
//                         width: '100%',
//                     }}>
//                     <div
//                         style={{
//                             // need this extra wrapper so that we provide Image with relative parent
//                             position: 'relative',
//                             height: '100%',
//                             width: '100%',
//                         }}>
//                         {image && (
//                             <Image
//                                 src={image}
//                                 alt={alt}
//                                 height={height}
//                                 width={width}
//                                 layout='responsive'
//                             />
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
