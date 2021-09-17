const MS_PER_SECOND = 1e3;
const SECS_PER_MIN = 60;
const MINS_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const DAYS_PER_WEEK = 7;
const WEEKS_PER_MONTH = 5;
const DAYS_PER_MONTH = 31;
const MONTHS_PER_YEAR = 12;

export default function selectUnit(from, to = new Date()) {
  const secs = (+from - +to) / MS_PER_SECOND;
  if (Math.abs(secs) < SECS_PER_MIN) {
    return {
      value: Math.round(secs),
      unit: "second",
    };
  }

  const mins = secs / SECS_PER_MIN;
  if (Math.abs(mins) < MINS_PER_HOUR) {
    return {
      value: Math.round(mins),
      unit: "minute",
    };
  }
  const hours = mins / MINS_PER_HOUR;
  if (Math.abs(hours) < HOURS_PER_DAY) {
    return {
      value: Math.round(hours),
      unit: "hour",
    };
  }

  const days = hours / HOURS_PER_DAY;
  if (Math.abs(days) < DAYS_PER_WEEK) {
    return {
      value: Math.round(days),
      unit: "day",
    };
  }

  const weeks = days / DAYS_PER_WEEK;
  if (Math.abs(weeks) < WEEKS_PER_MONTH) {
    return {
      value: Math.round(weeks),
      unit: "week",
    };
  }

  const months = days / DAYS_PER_MONTH;
  if (Math.abs(months) < MONTHS_PER_YEAR) {
    return {
      value: Math.round(months),
      unit: "month",
    };
  }

  const years = months / MONTHS_PER_YEAR;
  return {
    value: Math.round(years),
    unit: "year",
  };
}
