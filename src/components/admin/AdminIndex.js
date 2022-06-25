import {useDispatch} from "react-redux";
import {generateExampleData} from "../../redux/app/actions";
import {useLocation, useNavigate} from "react-router-dom";

export default function AdminIndex(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function exampleDataGeneratorButtonHandler() {
    dispatch(generateExampleData());
    navigate('/admin/shows');
  }

  return (
    <>
      <button className={'btn btn-success'} onClick={() => {
        exampleDataGeneratorButtonHandler()
      }}>Generuj przykładowe dane
      </button>
    </>
  );
}
