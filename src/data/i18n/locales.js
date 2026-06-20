export const localeCodes = {
  es: 'es',
  en: 'en',
};

export const localeNames = {
  es: 'Español',
  en: 'English',
};

export const routes = {
  home: { es: '/', en: '/en' },
  history: { es: '/history', en: '/en/history' },
};

export function getAlternates(routeKey) {
  return Object.entries(routes[routeKey]).map(([locale, path]) => ({
    lang: localeCodes[locale],
    href: path,
  }));
}

export function getLocaleSwitchLinks(routeKey, currentLocale) {
  return Object.entries(routes[routeKey]).map(([locale, href]) => ({
    locale,
    href,
    label: localeNames[locale],
    shortLabel: locale.toUpperCase(),
    current: locale === currentLocale,
  }));
}
