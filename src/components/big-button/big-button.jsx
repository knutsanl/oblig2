import './big-button.css';

function BigButton(props) {
    const classes = `BigButton ${props.enabled ? '' : 'disabled'}`;
    return (
        <div className={classes}>
            <p>{props.text}</p>
        </div>
    );
}

BigButton.defaultProps = {
    enabled: true,
    text: 'Button'
};

export default BigButton;