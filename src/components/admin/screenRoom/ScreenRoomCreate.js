import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {createScreenRoom} from "../../../redux/screenRoom/actions";
import ScreenRoomForm from "./ScreenRoomForm";

export default function ScreenRoomCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    dispatch(createScreenRoom({
      number: formData.number,
      capacity: formData.capacity
    }));

    navigate('/admin/screen-rooms')
  }

  return <ScreenRoomForm
    onHandleSubmit={handleSubmit}
  />
}
