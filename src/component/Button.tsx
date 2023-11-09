import React from 'react';
import {MAX_IMAGE,ArrowType, ButtonProps } from '../utility/Button';
import '../css/button.css';

const Button: React.FC<ButtonProps> = (props:ButtonProps): JSX.Element => {

    const changeCount = (dir: ArrowType) => {
        if (dir === 'left') {
            if (props.count - 1 <= 0) {
                props.updateCount(MAX_IMAGE);
            } else {
                props.updateCount(props.count - 1);
            }
        } else {
            if (props.count + 1 > MAX_IMAGE) {
                props.updateCount(1);
            } else {
                props.updateCount(props.count + 1);
            }
        }
    }

    return (
        <div className='button-container'>
            <button className="left-button" onClick={() => { changeCount(ArrowType.LEFT) }}>&larr;</button>
            <button className="right-button" onClick={() => { changeCount(ArrowType.RIGHT) }}>&rarr;</button>
        </div>
    )
};

export default Button;