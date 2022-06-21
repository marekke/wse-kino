export default function ConfirmCustomUI(props) {
  const test = (<a>{}</a>);

  return (
      <div className='card'>
        <div className="card-header bg-warning text-dark">
          <h4 className={'text-center mb-0'}>
            {props.title}
          </h4>
        </div>
        <div className={`card-body text-dark text-center p-4`}>
            {props.message}
        </div>
        <div className="card-footer bg-white">
          <button
            className="btn btn-light"
            onClick={() => {
              props.buttons[1].onClick();
              props.onClose();
            }}
          >
            {props.buttons[1].label}
          </button>

          <button
            className="btn btn-light float-end"
            onClick={() => {
              props.buttons[0].onClick();
              props.onClose();
            }}
          >
            {props.buttons[0].label}
          </button>
        </div>
      </div>
  );
}
