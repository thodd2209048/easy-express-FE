import { format } from "date-fns";

export const convertZonedDateTimeToDateTime = (timestamp) => {
  var date = new Date(timestamp * 1000);
  var formattedDate = format(date, "yyyy-MM-dd HH:mm");
  return formattedDate;
};
