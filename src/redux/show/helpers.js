import moment from "moment/moment";

export const isShowCurrentlyPlaying = (show) =>
   moment().isAfter(show.dateStart) && moment().isBefore(show.dateEnd);


export const hasShowBoughtTickets = (show) =>
  Object.values(show.seats).filter(seat => seat !== null).length > 0;
