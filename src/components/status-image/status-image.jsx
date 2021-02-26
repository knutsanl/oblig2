import './status-image.css';
import standing from '../../assets/standing-19@2x.png';
import home from '../../assets/Home.svg';
import campus from '../../assets/Wireframe.svg';

function StatusImage(props) {
    return(
        <div className="StatusImage" id={props.available === false ? 'opacity40' : undefined}>
            StatusImage
            {!props.onCampus && <img src={home} alt="Home" />}
            {props.onCampus && <img src={campus} alt="Campus" />}
            <img src={standing} alt="Standing" id="person" />
        </div>
    );
}

StatusImage.defaultProps = {
    available: true,
    onCampus: true
}

export default StatusImage;