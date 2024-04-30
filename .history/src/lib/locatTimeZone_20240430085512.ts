import { toZonedTime } from "date-fns-tz";

export function getLocalTime(date: Date) {
  const localTime = toZonedTime(
    new Date(date),
    "Europe/Bucharest"
  ).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return localTime; //Output format: 9:30 PM
}
