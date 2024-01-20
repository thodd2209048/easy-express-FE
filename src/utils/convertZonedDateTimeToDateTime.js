import { format } from "date-fns";
var moment = require("moment-timezone");

export const convertZonedDateTimeToDateTime = (timestamp) => {
  var date = new Date(timestamp * 1000);
  var formattedDate = format(date, "yyyy-MM-dd HH:mm");
  return formattedDate;
};

export const convertLocalDateTimeToZonedDateTime = (localDateTimeString) => {
  const date = new Date(localDateTimeString);
  return date;
};

export const convertLocalDateToZoneDateTime = (localDateString) => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return moment.tz(localDateString, timeZone).format();
};

export const compareTime = (firstTime, secondTime) => {
  return firstTime - secondTime;
};

export const getLocalDate = (date) => {
  return date.toJSON().slice(0, 10);
};
