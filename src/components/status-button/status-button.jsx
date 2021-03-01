import './status-button.css';

function StatusButton(props) {
    const isBusy = props.available ? '' : 'busy';

    return(
        <div className="StatusButton">
            <div className="textContainer"></div>
            <div className={['dot', isBusy].join(' ')}></div>
            <p className="text">{props.available === true ? 'Available' : 'Busy'}</p>
        </div>
    );
}

export default StatusButton;