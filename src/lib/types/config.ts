export interface HeaderConfig {
  title: string;
  menu: {
    items: MenuItem[];
    mobile: {
      breakpoint: number;
      fontSize: string;
    };
    desktop: {
      fontSize: string;
    };
  };
}

export interface MenuItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  header: HeaderConfig;
}
