import './big-button.css';
import React, { Component } from 'react';

class BigButton extends Component {
    constructor(props) {
        super(props);
        this.state = { enabled: this.props.enabled };
    }

    handleOnClick = () => {
        this.setState(state=>{
            return {
                enabled: !state.enabled
            }
        });
    };

    render() {
        const classes = `BigButton ${this.state.enabled ? '' : 'disabled'}`;
        return (
            <div className={classes} onClick={this.handleOnClick}>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

BigButton.defaultProps = {
    enabled: true,
    text: 'Button'
};

export default BigButton;