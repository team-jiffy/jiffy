import React, {Component} from 'react';
import './LandingPageAbout.css'
import { Layout} from 'antd';

const { Content } = Layout;

class LandingPageAbout extends Component {
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
                <Content className="ourService">
                    <div className="content">
                        <h1> Our Service </h1>
                        <div className="container">
                            <div className="timeline">
                                <li ></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </div>

                            <div className="steps-icon">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </div>

                            <div className="steps">
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                            </div>

                            <div className="steps-description">
                                <p>sign in your account
                                    place delivery order</p>
                                <p>drone/robot picks up the package
                                    sender enters pin code
                                    to put the package into drone/robot</p>
                                <p>drone/robot
                                    delivers the package</p>
                                <p>recipient clicks
                                    “confirm delivered”
                                    on mobile to get the package </p>

                            </div>
                        </div>
                    </div>
                </Content>
            </div>
        );
    }
}

export default LandingPageAbout;