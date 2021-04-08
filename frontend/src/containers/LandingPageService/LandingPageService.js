import React, {Component} from 'react';

class LandingPageService extends Component {
    render() {
        return (
            <div className="about">
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

                            <ul className="steps-icon">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>

                            <ul className="steps">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>

                            <ul className="steps-description">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </Content>
            </div>
        );
    }
}

export default LandingPageService;