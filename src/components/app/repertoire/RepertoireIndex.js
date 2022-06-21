import {useSelector} from "react-redux";
import {getRepertoire} from "../../../redux/show/selectors";
import DailyRepertoire from "./DailyRepertoire";
import Datetime from "react-datetime";
import {useState} from "react";

export default function RepertoireIndex(props) {
  const [filterDate, setFilterDate] = useState('');
  const repertoire = useSelector(getRepertoire);

  let dailyRepertoires;

  if (filterDate) {
    if (repertoire.hasOwnProperty(filterDate) === true) {
      dailyRepertoires = [<DailyRepertoire key={filterDate} repertoire={repertoire[filterDate]} date={filterDate}/>];
    } else {
      dailyRepertoires = (
        <h3 className={'text-center text-muted mt-5'}>
          Brak repertuaru na dany dzień
        </h3>
      );
    }
  } else {
    dailyRepertoires = Object.keys(repertoire).map(date =>
      <DailyRepertoire key={date} repertoire={repertoire[date]} date={date}/>)
  }


  return (
    <>
      <Datetime
        inputProps={{'placeholder': 'Wyszukaj po dacie'}}
        className={'mb-3'}
        dateFormat={'YYYY-MM-DD'}
        timeFormat={false}
        closeOnSelect={true}
        onChange={(m) =>  setFilterDate(m.format('YYYY-MM-DD'))}
        renderInput={(props) => (
          <div className="input-group mb-3">
            <input {...props} value={filterDate ? props.value : ''} />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => setFilterDate('')}
              >Wyczysc</button>
          </div>
        )}
      />
      {dailyRepertoires}
    </>
  );
}
