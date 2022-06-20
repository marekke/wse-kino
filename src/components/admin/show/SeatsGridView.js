const seatCardStyle = {
  width: '80px',
  height: '80px',
  'fontSize': '30px',
  'fontWeight': 'bold',
};

export default function SeatsGridView(props) {
  const {seats} = props;

  const seatsCards = Object.keys(seats).map(seatID => {
      const bgColor = seats[seatID] !== null ? 'bg-secondary' : 'bg-primary';

      return (
        <div className="col" key={seatID}>
          <div className={`card text-center d-flex aligns-items-center justify-content-center ${bgColor}`}
               style={seatCardStyle}>
            {seatID}
          </div>
        </div>
      );
    }
  );

  return (
    <div className={'row row-cols-8 g-2'}>
      {seatsCards}
    </div>
  );
}