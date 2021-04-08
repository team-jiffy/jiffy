import React from "react";
import "./About.css";
import { Layout } from 'antd';

const { Content } = Layout;

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   loading: true,
    };
  }

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
              </div>
            </Content>
        </div>
    );
  }
}

export default About;
