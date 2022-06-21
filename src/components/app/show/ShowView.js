import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getShowByID} from "../../../redux/show/selectors";
import ShowDetail from "../../common/show/ShowDetail";
import SeatsGridView from "../../admin/show/SeatsGridView";
import {buyTicket} from "../../../redux/show/actions";
import {confirmAlert} from "react-confirm-alert";
import ConfirmCustomUI from "../../common/ConfirmCustomUI";
import BuyTicketConfirmMessage from "./BuyTicketConfirmMessage";

export default function ShowView(props) {
  const {showID} = useParams();
  const show = useSelector((state) => getShowByID(state, showID));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSeatClick(seatID) {
    if (show.seats[seatID] !== null) {
      return;
    }

    confirmAlert({
      title: 'Potwierdź zakup biletu',
      buttons: [
        {
          label: 'Tak',
          onClick: () => {
            dispatch(buyTicket({
              showID,
              seatID
            }))
            navigate(`/show/${showID}/ticket/${seatID}`)
          }
        },
        {
          label: 'Nie',
          onClick: () => {
          }
        }
      ],
      customUI: (props) => <ConfirmCustomUI
        {...props}
        message={<BuyTicketConfirmMessage show={show} seatID={seatID} />}
      />
    });
  }

  return (
    <>
      <ShowDetail show={show}/>

      <div className={'row mt-4'}>
        <div className={'col'}>
          <div className={'row'}>
            <div className={'col'}>
              <h4>Miejsca:</h4>
            </div>
          </div>

          <div className={'row mt-2'}>
            <div className={'col'}>
              <SeatsGridView seats={show.seats} onSeatClick={handleSeatClick}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
