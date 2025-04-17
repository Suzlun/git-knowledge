'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MenuItem } from '@/lib/types/config';
import styles from './Header.module.css';

interface HamburgerMenuProps {
    items: MenuItem[];
}

export const HamburgerMenu = ({ items }: HamburgerMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
                onClick={toggleMenu}
                aria-label='メニュー'
                aria-expanded={isOpen}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
                <ul>
                    {items.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                onClick={() => setIsOpen(false)}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};
