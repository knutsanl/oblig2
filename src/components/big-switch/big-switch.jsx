import './big-switch.css';
import React, { Component } from 'react';
import BigButton from '../big-button/big-button';

class BigSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: this.props.checked };
    }

    handleOnClickFirstButton = (newValue) => {
        this.updatEnabled(newValue);
    }

    handleOnClickSecondButton = (newValue) => {
        this.updatEnabled(!newValue);
    }

    updatEnabled(newValue){
        this.setState({checked: newValue});
    }

    render() {
        const { config: { textWhenChecked, textWhenUnchecked } } = this.props;

        return (
            <div className="BigSwitch">
                <BigButton text={textWhenChecked} enabled={this.state.checked} onClick={this.handleOnClickFirstButton}/>
                <BigButton text={textWhenUnchecked} enabled={!this.state.checked} onClick={this.handleOnClickSecondButton}/>
            </div>
        );
    }
}

BigSwitch.defaultProps = {
    config: { textWhenChecked: 'on-campus', textWhenUnchecked: 'Home office' },
    checked: true
};

export default BigSwitch;