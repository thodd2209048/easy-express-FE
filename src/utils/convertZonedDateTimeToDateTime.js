import { format } from "date-fns";

export const convertZonedDateTimeToDateTime = (timestamp) => {
  var date = new Date(timestamp * 1000);
  var formattedDate = format(date, "yyyy-MM-dd HH:mm");
  return formattedDate;
};

export const convertLocalDateTimeToZonedDateTime = (localDateTimeString) => {
  const date = new Date(localDateTimeString);
  // const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // const pattern = "d.M.yyyy HH:mm:ss.SSS 'GMT' XXX (z)";
  // const output = format(date, pattern, { timeZone: timeZone });
  return date;
};
