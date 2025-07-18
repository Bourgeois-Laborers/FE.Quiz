import { createI18n } from 'vue-i18n';

import messages from '@/locales';

export type MessageLanguages = keyof typeof messages;
export type MessageSchema = (typeof messages)['en-US'];

declare module 'vue-i18n' {
  export interface DefineLocaleMessage extends MessageSchema {}

  export interface DefineDateTimeFormat {
    date: {
      month: 'short';
      day: 'numeric';
      year: 'numeric';
    };
    time: {
      hour: 'numeric';
      minute: 'numeric';
    };
    datetime: {
      month: 'short';
      day: 'numeric';
      hour: 'numeric';
      minute: 'numeric';
    };
  }

  export interface DefineNumberFormat {
    currency: {
      style: 'currency';
      currencyDisplay: 'symbol';
      currency: string;
    };
  }
}

const i18n = createI18n<{ message: MessageSchema }, MessageLanguages>({
    locale: 'en-US',
    legacy: false,
    messages,
});

export { i18n };