import { toZonedTime } from "date-fns-tz";

export function getLocalTime(date: Date) {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localTime = toZonedTime(new Date(date), userTimeZone);

  return localTime;
}
