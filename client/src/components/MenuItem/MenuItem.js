import React from 'react';
import './MenuItem.styles.scss'
import {withRouter} from "react-router-dom";

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => {
    return <div className={`${size || ''} menu_item`} onClick={()=>{history.push(`${match.url+linkUrl}`)}}>
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

export default withRouter(MenuItem)