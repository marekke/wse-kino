import {useDispatch, useSelector} from "react-redux";
import {removeError} from "../../redux/app/actions";

export default function Error() {
  const error = useSelector((state) => state.app.error);
  const dispatch = useDispatch();

  if (error === null) {
    return <></>;
  }

  return (
    <div className={'alert alert-danger alert-dismissible'}>
      {error}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => dispatch(removeError())}
      ></button>
    </div>
  );
}