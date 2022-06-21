import {useParams} from "react-router-dom";

export default function MovieView(props) {
  const { movieID } = useParams();

  return (
    <>
      movie view {movieID}
    </>
  );
}
