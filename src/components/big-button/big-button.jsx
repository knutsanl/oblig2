import './big-button.css';

function BigButton(props) {
    const classes = `BigButton ${props.enabled ? '' : 'disabled'}`;
    return (
        <div className={classes}>
            <p>{props.text}</p>
        </div>
    );
}

export default BigButton;