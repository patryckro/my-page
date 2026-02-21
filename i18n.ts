import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Can be imported from a shared config
const locales = ['pt-BR', 'en-US'];

export default getRequestConfig(async ({ requestLocale }) => {

  const locale = await requestLocale;

  if (!locales.includes(locale as string)) notFound();

  return {
    locale: locale as string,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
