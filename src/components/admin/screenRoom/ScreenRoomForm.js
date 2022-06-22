import {useState} from "react";

export default function ScreenRoomForm(props) {
  const [number, setNumber] = useState(props.number);
  const [capacity, setCapacity] = useState(props.capacity);

  function handleSubmit(e) {
    e.preventDefault();
    props.onHandleSubmit({number, capacity});
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Numer</label>
        <input
          type="number"
          className="form-control"
          placeholder="Numer"
          onChange={e => setNumber(e.target.value)}
          value={number}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Pojemność</label>
        <input
          type="number"
          className="form-control"
          placeholder="Pojemność"
          onChange={e => setCapacity(e.target.value)}
          value={capacity}
          />
      </div>

      <div className="mb-3">
        <button type="submit" className="btn btn-success">Zapisz</button>
      </div>
    </form>
  );
}
