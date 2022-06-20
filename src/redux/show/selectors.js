export const getShowsByScreenRoomID = (state, screenRoomID) =>
  Object.values(state.show).filter(show => show.screenRoomID === screenRoomID);

export const getReservedTimeSlotsForScreenRoomID = (state, screenRoomID) => {
  const result = [];

  console.log()

  Object.values(state.show).forEach(show => {
    if (show.screenRoomID !== screenRoomID) {
      return;
    }

    result.push([show.dateStart, show.dateEnd]);
  })

  return result;
};


