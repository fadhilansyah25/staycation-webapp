import React from 'react'
import Button from 'Component/Button/Button'

export default function Logo(props) {
    return (
        <Button className={`brand-text-icon ${props.center? 'mx-auto':""}`} href="" type="link">
            Stay<span className="text-gray-900">cation.</span>
        </Button>
    )
}
