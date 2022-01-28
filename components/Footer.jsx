import dayjs from 'dayjs';
import { FaCopyright } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer
            className='footer'
            style={{
                backgroundColor: '#00608d',
                opacity: '0.95',
                color: '#ffffff',
            }}>
            <div className='content has-text-centered'>
                <p>
                    <span className='icon-holder' style={{ maxHeight: '1px' }}>
                        <i>
                            <FaCopyright />
                        </i>
                    </span>
                    <span>www.feldenkrais.ie</span>
                    <span>@{dayjs().year()}</span>
                </p>
            </div>
            <style jsx>{`
                span.icon-holder {
                    height: 10px;
                }
                div {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                span {
                    margin-right: 8px;
                }
            `}</style>
        </footer>
    );
}
