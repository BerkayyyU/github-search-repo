import { dayInMilliseconds, hourInMilliseconds, minInMilliseconds, weekInMilliseconds } from './assets/constants/dates';

//Could have installed a 3rd party library(moment.js, date-fns etc.) to parse the date, but I did not find it necessary.
//Gets the difference between now and given date. Returns default date, if the given date is more than a week ago.
export const calculateDateDiff = (date: string) => {
  const diffInMilliseconds = Date.now() - new Date(date).getTime();
  switch (true) {
    case diffInMilliseconds < minInMilliseconds:
      return `Updated ${Math.floor(diffInMilliseconds / 1000)} seconds ago`;
    case diffInMilliseconds < hourInMilliseconds:
      return `Updated ${Math.floor(diffInMilliseconds / minInMilliseconds)} minutes ago`;
    case diffInMilliseconds < dayInMilliseconds:
      return `Updated ${Math.floor(diffInMilliseconds / hourInMilliseconds)} hours ago`;
    case diffInMilliseconds < weekInMilliseconds:
      return `Updated ${Math.floor(diffInMilliseconds / dayInMilliseconds)} days ago`;
    default:
      const defaultDate = setDefaultDate(new Date(date));
      return defaultDate;
  }
};

// 2022-04-28T22:12:41Z --> 28.04.2022
export const setDefaultDate = (date: Date) => {
  const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
  const month = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
  const year = date.getFullYear();
  return `Updated on ${day}.${month}.${year}`;
};
