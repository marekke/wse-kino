import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateScreenRoom} from "../../../redux/screenRoom/actions";
import ScreenRoomForm from "./ScreenRoomForm";
import {getScreenRoomByID} from "../../../redux/screenRoom/selectors";

export default function ScreenRoomUpdate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { screenRoomID } = useParams();
  const screenRoom = useSelector((state) => getScreenRoomByID(state, screenRoomID));

  const handleSubmit = (formData) => {
    dispatch(updateScreenRoom({
      id: screenRoomID,
      number: formData.number,
      capacity: formData.capacity
    }));
    navigate('/admin/screen-rooms')
  }

  return <ScreenRoomForm
    number={screenRoom.number}
    capacity={screenRoom.capacity}
    onHandleSubmit={handleSubmit} />
}
