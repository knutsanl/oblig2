import './status-image.css';

function StatusImage(props) {
    return(
        <div className="StatusImage">StatusImage</div>
    );
}

StatusImage.defaultProps = {
    available: true,
    onCampus: true
}

export default StatusImage;