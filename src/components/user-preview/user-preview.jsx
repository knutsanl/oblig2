import './user-preview.css';

function UserPreview({ user }) {
    const place = user.place;
    const available = user.available;
    return(
        <div className="UserPreview">
            <div className="icon">
                {/* Missing office.svg and home.svg */}
                {place === 'on-campus' ? 'office.svg' : 'home.svg'}
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