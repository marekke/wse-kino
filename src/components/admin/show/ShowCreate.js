import {useDispatch, useSelector} from "react-redux";
import {createShow} from "../../../redux/show/actions";
import {useNavigate} from "react-router-dom";
import ShowForm from "./ShowForm";


export default function ShowCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const movies = useSelector((state) => state.movie);
  const screenRooms = useSelector((state) => state.screenRoom);

  const handleFormSubmit = (formData) => {
    dispatch(createShow(formData));
    navigate('/admin/shows');
  };

  return (
    <>
      <ShowForm movies={movies} screenRooms={screenRooms} onHandleSubmit={handleFormSubmit} />
    </>
  );
}
