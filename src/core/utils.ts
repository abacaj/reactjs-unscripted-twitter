import { formatDistanceToNowStrict } from 'date-fns';

const formatDistanceLocale: Record<string, string> = {
  lessThanXSeconds: '{{count}}s',
  xSeconds: '{{count}}s',
  halfAMinute: '30s',
  lessThanXMinutes: '{{count}}m',
  xMinutes: '{{count}}m',
  aboutXHours: '{{count}}h',
  xHours: '{{count}}h',
  xDays: '{{count}}d',
  aboutXWeeks: '{{count}}w',
  xWeeks: '{{count}}w',
  aboutXMonths: '{{count}}m',
  xMonths: '{{count}}m',
  aboutXYears: '{{count}}y',
  xYears: '{{count}}y',
  overXYears: '{{count}}y',
  almostXYears: '{{count}}y',
};

export function formatTimelineTweet(date: Date) {
  return formatDistanceToNowStrict(date, {
    locale: {
      formatDistance: (token: string, count, options) => {
        return formatDistanceLocale[token].replace('{{count}}', count);
      },
    },
  });
}
