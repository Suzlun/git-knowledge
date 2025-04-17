import { getHeaderConfig } from '@/lib/config';
import Link from 'next/link';
import { DEFAULT_MENU_ITEMS } from '@/lib/constants/menu';
import styles from './Header.module.css';
import { HamburgerMenu } from './HamburgerMenu';

export const Header = () => {
    const config = getHeaderConfig();
    const items = [...DEFAULT_MENU_ITEMS, ...config.menu.items];

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <h1 className={styles.title}>
                    <Link href='/'>{config.title}</Link>
                </h1>
                <HamburgerMenu items={items} />
            </div>
        </header>
    );
};

export default Header;
