import React from 'react';
import './button.scss';

class Button extends React.Component{
    constructor(props){
        super(props);
    }

    clickHandler = () => {
        console.log('button click: ', this.props);
        if(this.props.emitEvent){
            this.props.emitEvent();
        }
    }

    render(){
        const {buttonText} = this.props;
        return(
            <button className="btn" onClick={this.clickHandler}>{buttonText}</button>
        );
    };
};

export default Button;
