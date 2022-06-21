export const getScreenRooms = (state) => Object.values(state.screenRoom);
export const getScreenRoomByID = (state, id) => state.screenRoom[id];
