import React from 'react';
import './TagInfo.scss';

export default function TagInfo(props) {
    return (
        <div className="price-tag">
            <span>{`${props.price} `}</span>{props.desc}
        </div>
    )
}
