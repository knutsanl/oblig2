import './user-preview.css';
import home from '../../assets/home-filled.svg';
import campus from '../../assets/industry-11.svg';

function UserPreview({ user }) {
    const place = user.place;
    const available = user.available;
    return(
        <div className="UserPreview">
            <div className="icon">
                {/* Missing office.svg and home.svg */}
                {place === 'on-campus' ? <img className="svgIcon" alt="" src={campus}/> : <img className="svgIcon" alt="" src={home} /> }
            </div>
            <div className="MainRectangle">
                { user.name.toUpperCase() }
            </div>
            <div className="OuterCircle">
                <div className="InnerCircle" style={{backgroundColor: available ? 'green' : 'red'}}></div>
            </div>
        </div>
    );
}

export default UserPreview;