import React from 'react';
import './MenuItem.styles.scss'

export const MenuItem = ({title, imageUrl, size}) => {
    return <div className={`${size || ''} menu_item`}>
        <div
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            className='bg_img'
        />
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
};

