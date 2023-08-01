import { isMoment, Moment } from "moment";

export const timestampFormat: (date: Moment) => string | null = (date: Moment) => {
  return isMoment(date) ? date.format("x") : null;
};

export const commonDateFormat: (date: Moment) => string | null = (date: Moment) => {
  return isMoment(date) ? date.format("DD MMM, yyyy") : null;
};
