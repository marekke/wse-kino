import PropTypes from "prop-types";

const seatCardStyle = {
  'fontSize': '30px',
  'fontWeight': 'bold',
};

function SeatsGridView(props) {
  const {seats, onSeatClick} = props;

  function handleSeatClick(seatID) {
    if (onSeatClick !== undefined) {
      onSeatClick(seatID)
    }
  }

  const seatsCards = Object.keys(seats).map(seatID => {
      const bgColor = seats[seatID] !== null ? 'bg-secondary' : 'bg-primary';

      return (
        <div className="col-1" key={seatID}>
          <div className={`card p-1 text-center d-flex aligns-items-center justify-content-center ${bgColor}`}
               style={seatCardStyle}
               onClick={() => handleSeatClick(seatID)}
               role={`${seats[seatID] === null ? 'button' : ''}`}
          >
            {seatID}
          </div>
        </div>
      );
    }
  );

  return (
    <div className={`row row-cols-8 g-4`}>
      {seatsCards}
    </div>
  );
}

SeatsGridView.propTypes = {
  seats: PropTypes.object,
  onSeatClick: PropTypes.func
};

export default SeatsGridView;