export default function FormErrors(props) {
  const {errors} = props;

  if (errors === undefined || errors.length === 0) {
    return (<></>);
  }

  const errorsList = errors.map((error, index) => <li key={index}>{error}</li>)

  return (
    <>
      <div className={'alert alert-danger'}>
        <ul className={'mb-0'}>
          {errorsList}
        </ul>
      </div>
    </>
  );
}
