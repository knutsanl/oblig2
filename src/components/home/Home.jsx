import './Home.css';
import React, { Component } from 'react';
import BigSwitch from '../big-switch/big-switch';
import StatusButton from '../status-button/status-button';
import StatusImage from '../status-image/status-image';

const config = { textWhenChecked: 'on-campus', textWhenUnchecked: 'Home office' };

class Home extends Component {
    render() {
        const { status, place } = this.props.user;
        const onCampus = place === 'on-campus';
        const available = status === 'available';

        return (
            <div className="Home">
                <StatusButton available={available}/>
                <StatusImage available={available} onCampus={onCampus}/>
                <BigSwitch config={config} checked={onCampus} onChange={this.updateUserPlace} />
            </div>
        );
    }

    updateUserPlace = (onCampus) => {
        console.log('updateUserPlace: ', onCampus );
        this.props.onChangePlace(onCampus);
    }
}

Home.defaultProps = {
    name: 'Joe Doe',
    place: 'on-campus',
    status: 'available',
    onChangePlace: () => { console.log('<Home> onChangePlace') }
};

export default Home;