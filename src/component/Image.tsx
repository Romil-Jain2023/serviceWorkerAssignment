import React from 'react';
import { ImageProps } from '../utility/Image';

const Image: React.FC<ImageProps> = (props: ImageProps): JSX.Element => {
    return (
            <img className="image" src={props.image} />
    )
};
export default Image;