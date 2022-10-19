import enGB from 'date-fns/locale/en-GB';

export const noop = () => {
  // Noop
};

export function isDefined<T extends unknown | null | undefined>(value: unknown): NonNullable<T> {
  return (value !== null && value !== undefined) as unknown as NonNullable<T>;
}

export function isObject(value: {}): value is object {
  return typeof value === 'object' && !Array.isArray(value) && value !== null;
}

// https://date-fns.org/docs/I18n-Contribution-Guide#formatrelative
// https://github.com/date-fns/date-fns/blob/master/src/locale/en-US/_lib/formatRelative/index.js
// https://github.com/date-fns/date-fns/issues/1218
// https://stackoverflow.com/questions/47244216/how-to-customize-date-fnss-formatrelative
const formatRelativeLocale = {
  lastWeek: "'Last' eeee",
  yesterday: "'Yesterday'",
  today: "'Today'",
  tomorrow: "'Tomorrow'",
  nextWeek: "'Next' eeee",
  other: 'dd-MM-yyyy',
};

export const relativeDateLocale = {
  ...enGB,
  formatRelative: (token: keyof typeof formatRelativeLocale) => formatRelativeLocale[token],
};

export const wait = (time: number) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(undefined), time);
  });
