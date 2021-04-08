import React, {Component} from 'react';
import "./LandingPageMission.css"
import { Layout} from 'antd';
import 'boxicons'

const { Content } = Layout;

class LandingPageMission extends Component {
    render() {
        return (
            <div className="about">
                <Content className="ourMission">
                    <div className="content">
                        <h1> Our Mission </h1>
                        <h3>We are an innovative start-up in unmanned delivery.</h3>
                        <h3>We are making automated drone and robot delivery possible for everyone.</h3>
                        <span></span>
                        <h3>Our mission is to improve life and lifestyles by making delivery instant for everyone.</h3>
                        <h3>Medical delivery, food delivery, ecommerce deliery every day, just in a moment!</h3>
                    </div>
                </Content>
            </div>
        );
    }
}

export default LandingPageMission;