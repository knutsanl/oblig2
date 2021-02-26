import './status-button.css';

function StatusButton(props) {
    return(
        <div className="StatusButton">
            StatusButton
            <section>
                <p>{props.available === true ? 'Available' : 'Busy'}</p>
                <span className="outerDot"><span className="innerDot" style={{backgroundColor: props.available === true ? "var(--color-available)" : "var(--color-busy)"}}></span></span>
            </section>
        </div>
    );
}

export default StatusButton;