import moment from "moment/moment";

export function convertDateToInternalFormat(date) {
  return date.toISOString().replace('T'," ").substring(0, 19);
}

export function checkIfIsInteger(input) {
  return isNaN(input) || input.toString().includes('.');
}


export function exampleDataGenerator() {
  const movies = {
    1: {
      title: 'Władca Pierścieni',
      duration: 180,
      id: 1
    },
    2: {
      title: 'Top Gun',
      duration: 80,
      id: 2
    },
    3: {
      title: 'Pulp Fiction',
      duration: 120,
      id: 3
    }
  }

  const screenRooms = {
    1: {
      number: 1,
      capacity: 10,
      id: 1
    },
    2: {
      number: 2,
      capacity: 20,
      id: 2
    }
  }

  const shows = {}
  let showID = 1;
  const dt = moment().add(1, 'hours');

  Object.values(movies).forEach(movie => {
    Object.values(screenRooms).forEach(screenRoom => {
      const seats = {};
      for (let i=1; i <= screenRoom.capacity; i++) {
        seats[i] = null;
      }


      shows[showID] = {
        movieID: movie.id,
        screenRoomID: screenRoom.id,
        id: showID,
        movie: {
          title: movie.title,
          duration: movie.duration
        },
        screenRoom: {
          number: screenRoom.number
        },
        dateStart: dt.format('YYYY-MM-DD HH:mm:ss'),
        dateEnd: dt.add(movie.duration, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
        seats: seats,
      }
      showID++
      dt.add(1, 'hours');
    })
    dt.add(1, 'days');
    dt.set({hour: 14, minute: 0, second: 0})
  })

  return {
    movie: movies,
    screenRoom: screenRooms,
    show: shows
  }
}
