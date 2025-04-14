import { SiteConfig } from "../types/config";
import defaultConfig from "@/../config/default.json";

let siteConfig: SiteConfig = defaultConfig;

// 設定をマージする関数
export function mergeConfig(customConfig: Partial<SiteConfig>) {
  siteConfig = {
    ...defaultConfig,
    ...customConfig,
    header: {
      ...defaultConfig.header,
      ...customConfig.header,
      menu: {
        ...defaultConfig.header.menu,
        ...customConfig.header?.menu,
        items: [
          ...(defaultConfig.header.menu.items || []),
          ...(customConfig.header?.menu?.items || []),
        ],
      },
    },
  };
}

// 設定を取得する関数
export function getConfig(): SiteConfig {
  return siteConfig;
}

// ヘッダー設定を取得する関数
export function getHeaderConfig() {
  return siteConfig.header;
}
