import {useSelector} from "react-redux";
import {getRepertoire} from "../../../redux/show/selectors";
import DailyRepertoire from "./DailyRepertoire";

export default function RepertoireIndex(props) {
  const repertoire = useSelector(getRepertoire);

  const dailyRepertoires = Object.keys(repertoire).map(date =>
    <DailyRepertoire key={date} repertoire={repertoire[date]} date={date}/>)

  return (
    <>
      {dailyRepertoires}
    </>
  );
}
