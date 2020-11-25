import React from 'react';
import './MetaDesc.scss';

export default function MetaDesc(props) {
    return (
        <div className="meta-desc">
            <p className="name">{props.name}</p>
            <p className="location">{`${props.city}, ${props.country}`}</p>
        </div>
    )
}
