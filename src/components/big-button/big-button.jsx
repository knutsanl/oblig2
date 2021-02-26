import React, {Component} from 'react';

import './big-button.css';

class BigButton extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const classes = `BigButton ${this.props.enabled ? "enabled" : "disabled"}`;
        return (
            <div className={classes}>
                <p>{this.props.text.toUpperCase()}</p>
            </div>
        )
    }
}

export default BigButton;