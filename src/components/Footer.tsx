import Link from 'next/link';
import { getFooterConfig, getHeaderConfig } from '@/lib/config';
import { FOOTER_MENU_ITEMS } from '@/lib/constants/menu';
import styles from './Footer.module.css';

export const Footer = () => {
    const config = getFooterConfig();
    const headerConfig = getHeaderConfig();
    const siteTitle = headerConfig.title;

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.siteTitle}>
                    <Link href='/'>{siteTitle}</Link>
                </div>
                <div className={styles.footerLinks}>
                    {FOOTER_MENU_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={styles.footerLink}>
                            {item.label}
                        </Link>
                    ))}
                    {config.links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={styles.footerLink}>
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className={styles.copyright}>{config.copyright}</div>
            </div>
        </footer>
    );
};

export default Footer;
