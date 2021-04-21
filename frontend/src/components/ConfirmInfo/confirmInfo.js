import React, { Component } from "react";
import { Descriptions, Button, Row, Col } from "antd";
import FullMap from '../../components/FullMap/FullMap';

class confirmInfo extends Component {
  render() {
    return (
      <div>
        <div class="container">
            <div className="confirmInfo-title"></div>
            <div className="confirmInfo-whole">
                <p>
                <h2>Congratulations! Your order has been succefully placed.</h2>
                </p>
                <p>
                <h3>We will let you know once we delivered the package.</h3>
                </p>
            </div>
            <div class="row">
                <div class="col">
                <div className="confirmInfo-page">
                <div>
                <Row className="line1">
                    <Col span={8} offset={4}>
                    <a style={{ fontWeight: "bold" }}>From</a>
                    </Col>
                    <Col>
                    <p>hayley@jiffy.com</p>
                    <p>123-456-7890</p>
                    <p>1264 Jiffy Ave., Los Angeles, CA, 900183</p>
                    </Col>
                </Row>
                </div>
                <div>
                <Row className="line2">
                    <Col span={8} offset={4}>
                    <a style={{ fontWeight: "bold" }}>To </a>
                    </Col>

                    <Col>
                    <p>macha@zippy.com</p>
                    <p>987-654-3210</p>
                    <p>896 Drodro market., Los Angeles, CA, 9005</p>
                    </Col>
                </Row>
                </div>
                {/*<div>*/}
                {/*    <Descriptions >*/}
                {/*        <Descriptions.Item label="Order tracking no.">Wfnn9FSJWcG873</Descriptions.Item>*/}
                {/*    </Descriptions>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <Descriptions>*/}

                {/*        <Descriptions.Item label="From">*/}
                {/*            hayley@jiffy.com*/}
                {/*            <br/>*/}
                {/*            123-456-7890*/}
                {/*            <br/>*/}
                {/*            1264 Jiffy Ave., Los Angeles, CA, 90018<br/>*/}
                {/*        </Descriptions.Item>*/}
                {/*    </Descriptions>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <Descriptions>*/}

                {/*        <Descriptions.Item label="To">*/}
                {/*            macha@zippy.com*/}
                {/*            <br/>*/}
                {/*            987-654-3210*/}
                {/*            <br/>*/}
                {/*            896 Drodro market., Los Angeles, CA, 90053 <br/>*/}
                {/*        </Descriptions.Item>*/}
                {/*    </Descriptions>*/}

                {/*</div>*/}
                <div>
                <Descriptions>
                    <Descriptions.Item label="Package information">
                    {" "}
                    small, 10 lbs{" "}
                    </Descriptions.Item>
                </Descriptions>
                </div>
                <div>
                <Descriptions>
                    <Descriptions.Item label="Estimated delivery time">
                    2:00 p.m., Friday, March 26, 2021
                    </Descriptions.Item>
                </Descriptions>
                </div>
                <div>
                <Descriptions>
                    <Descriptions.Item label="You deliver pal">
                    Drodro (drone)
                    </Descriptions.Item>
                </Descriptions>
                </div>
                <div>
                <Descriptions>
                    <Descriptions.Item label="Delivery fee">
                    $ 25.03
                    </Descriptions.Item>
                </Descriptions>
                </div>
            </div>

                </div>
                <div class="col" style={{height: "500px"}}>
                    <FullMap />
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default confirmInfo;
