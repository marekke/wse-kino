const seatCardStyle = {
  'fontSize': '30px',
  'fontWeight': 'bold',
};

export default function SeatsGridView(props) {
  const {seats} = props;

  const seatsCards = Object.keys(seats).map(seatID => {
      const bgColor = seats[seatID] !== null ? 'bg-secondary' : 'bg-primary';

      return (
        <div className="col-1" key={seatID}>
          <div className={`card p-1 text-center d-flex aligns-items-center justify-content-center ${bgColor}`}
               style={seatCardStyle}>
            {seatID}
          </div>
        </div>
      );
    }
  );

  const numberColumns = seatsCards.length > 40 ? 20 : 10;

  return (
    <div className={`row row-cols-8 g-4`}>
      {seatsCards}
    </div>
  );
}