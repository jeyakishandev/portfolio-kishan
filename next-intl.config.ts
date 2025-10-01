import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
  if (!locale) locale = 'fr';

  return {
    locale,
    messages: (await import(`./src/messages/${locale}/common.json`)).default
  };
});
