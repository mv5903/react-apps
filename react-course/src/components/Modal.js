// Responsible for rendering an overlay, or a confirmation dialog

function Modal(props) {

    let cancelHandler = () => props.onCancel();

    let confirmHandler = () => props.onConfirm();

    return(
        <div className='modal'>
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
            <button className="btn" onClick={cancelHandler}>Confirm</button>
        </div>
    );
}

export default Modal;