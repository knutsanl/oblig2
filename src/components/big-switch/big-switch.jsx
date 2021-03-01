import './big-switch.css';
import BigButton from '../big-button/big-button';

function BigSwitch(props) {
    const {checked, config: {textWhenChecked, textWhenUnchecked}} = props;
    return(
        <div className="BigSwitch">
            <BigButton text={textWhenChecked} enabled={checked}/>
            <BigButton text={textWhenUnchecked} enabled={!checked}/>
        </div>
    );
}

BigSwitch.defaultProps = {
    config: {textWhenChecked: 'on-campus', textWhenUnchecked:'Home office'},
    checked: true
};

/*
<BigSwitch config={} checked={true}/>
Config: {textWhenChecked: “on-campus”, textWhenUnchecked:”Home office”}  
Composed by 2 <BigButton/>
Only 1 <BigButton/> can be clicked
Distance between buttons 20px
*/

export default BigSwitch;