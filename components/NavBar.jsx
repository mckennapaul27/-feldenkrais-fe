import { useState } from 'react';
import Link from 'next/link';

export default function Navbar({ links }) {
    const [isActive, toggleActive] = useState(false);
    return (
        <nav
            className={`navbar`}
            role='navigation'
            aria-label='main navigation'>
            <div className='container'>
                <div
                    className='navbar-brand'
                    // style={{ width: '25%' }}
                >
                    <Link href='/'>
                        <a className='navbar-item'>
                            <img
                                src='/images/logo.jpg'
                                alt='Feldenkrais Ireland Logo'
                                style={{
                                    minHeight: '70px',
                                }}
                            />
                        </a>
                    </Link>

                    <a
                        onClick={() => toggleActive(!isActive)}
                        role='button'
                        className={`navbar-burger ${isActive && 'is-active'}`}
                        aria-label='menu'
                        aria-expanded='false'
                        data-target='navbarSimple'>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                    </a>
                </div>
                <div
                    id='navbarSimple'
                    className={`navbar-menu ${isActive && 'is-active'}`}>
                    <div className='navbar-end'>
                        {links.map((a) => {
                            if (a.isDropDown) {
                                return (
                                    <div
                                        className='navbar-item has-dropdown is-hoverable'
                                        key={a.id}>
                                        <a className='navbar-link is-arrowless'>
                                            {a.text}
                                        </a>
                                        <div className='navbar-dropdown'>
                                            {a.dropDown.map((b) => (
                                                <Link
                                                    href={`/${b.url}`}
                                                    key={b.id}>
                                                    <a
                                                        className='navbar-item'
                                                        onClick={() =>
                                                            toggleActive()
                                                        }>
                                                        {b.text}
                                                    </a>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    <div className='navbar-item' key={a.id}>
                                        <Link href={`/${a.url}`}>
                                            <a onClick={() => toggleActive()}>
                                                {a.text}
                                            </a>
                                        </Link>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
}
