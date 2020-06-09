import React from 'react';
import './HomePage.styles.scss'

export const HomePage = (props) => {
    return <div className="homepage">
        <div className="main_menu">
            <div className="menu_item">
                <div className="content">
                    <h1 className="title">HATS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu_item">
                <div className="content">
                    <h1 className="title">JACKETS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu_item">
                <div className="content">
                    <h1 className="title">sneakers</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu_item">
                <div className="content">
                    <h1 className="title">women</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu_item">
                <div className="content">
                    <h1 className="title">men</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
};

