export type Locale = 'fr' | 'ar';

export const locales: Locale[] = ['fr', 'ar'];
export const defaultLocale: Locale = 'fr';

const dictionaries = {
  fr: () => import('@/dictionaries/fr.json').then((m) => m.default),
  ar: () => import('@/dictionaries/ar.json').then((m) => m.default),
};

export async function getDictionary(locale: string) {
  const validLocale = (locale === 'ar' ? 'ar' : 'fr') as Locale;
  return dictionaries[validLocale]();
}
