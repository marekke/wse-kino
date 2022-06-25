import PropTypes from "prop-types";

function BuyTicketConfirmMessage(props) {
  const {show, seatID} = props;

  return (
      <>
        <div className={'text-start'}>
          <small>Film</small>
          <h5>{show.movie.title}</h5>
        </div>
        <div className={'text-start'}>
          <small>Data</small>
          <h5>{show.dateStart}</h5>
        </div>
        <div className={'text-start'}>
          <small>Sala</small>
          <h5>{show.screenRoom.number}</h5>
        </div>
        <div className={'text-start'}>
          <small>Miejsce</small>
          <h5>{seatID}</h5>
        </div>
      </>
  );
}

BuyTicketConfirmMessage.propTypes = {
  show: PropTypes.object,
  seatID: PropTypes.number
};

export default BuyTicketConfirmMessage;