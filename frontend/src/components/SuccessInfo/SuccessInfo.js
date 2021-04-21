import React, {Component} from 'react';
import { Descriptions, Button, Select, Icon, Divider,Row, Col} from 'antd';

const { Option } = Select;
let index = 0;


class SuccessInfo extends Component {

    state = {
        items: ['visa - 1234'],
    };



    // addItem = () => {
    //     console.log('addItem');
    //     const { items } = this.state;
    //     this.setState({
    //         items: [...items, `New item ${index++}`],
    //     });
    // };

    render() {
        const { items } = this.state;

        return (
            <div>

                <div className="successInfo-whole">
                    <div className="successInfo-title">
                        <h2>Please confirm your delivery information</h2>
                    </div>
                    <div className="profile-page">
                        <div>
                            <Row className='line1'>
                                <Col span={8} offset={4}>

                                    <a style={{fontWeight: 'bold'}}>From </a>
                                </Col>

                                <Col>
                                    <p>hayley@jiffy.com
                                        <span className= "change">
                                           <Button>Change</Button>
                                    </span>
                                    </p>
                                    <p>123-456-7890</p>
                                    <p>1264 Jiffy Ave., Los Angeles, CA, 900183</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className='line2'>
                                <Col span={8} offset={4}>

                                    <a style={{fontWeight: 'bold'}}>To </a>
                                </Col>

                                <Col>
                                    <p>macha@zippy.com
                                        <span className= "change">
                                           <Button>Change</Button>
                                    </span>
                                    </p>
                                    <p>987-654-3210</p>
                                    <p>896 Drodro market., Los Angeles, CA, 9005</p>
                                </Col>
                            </Row>
                        </div>

                        {/*<div>*/}
                        {/*    <Descriptions>*/}
                        {/*        <Descriptions.Item label="From">*/}
                        {/*            <span>*/}
                        {/*                hayley@jiffy.com*/}
                        {/*            <span className= "change">*/}
                        {/*                   <Button>Change</Button>*/}
                        {/*            </span>*/}
                        {/*            </span>*/}

                        {/*            <br/>*/}
                        {/*            123-456-7890*/}
                        {/*            <br/>*/}
                        {/*            1264 Jiffy Ave., Los Angeles, CA, 90018<br/>*/}
                        {/*        </Descriptions.Item>*/}
                        {/*    </Descriptions>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <Descriptions>*/}
                        {/*    <Descriptions.Item label="To">*/}
                        {/*        macha@zippy.com*/}
                        {/*        <span className= "change">*/}
                        {/*                   <Button>Change</Button>*/}
                        {/*            </span>*/}
                        {/*        <br/>*/}
                        {/*        987-654-3210*/}
                        {/*        <br/>*/}
                        {/*        896 Drodro market., Los Angeles, CA, 90053<br/>*/}
                        {/*    </Descriptions.Item>*/}
                        {/*</Descriptions>*/}
                        {/*</div>*/}
                        <div>
                            <Descriptions>

                                <Descriptions.Item label="Estimated delivery time">2:00 p.m., Friday, March 26, 2021</Descriptions.Item>
                            </Descriptions>

                        </div>
                        <div>
                            <Descriptions>

                                <Descriptions.Item label="You deliver pal">Drodro (drone)</Descriptions.Item>
                            </Descriptions>

                        </div>
                        <div>
                            <Descriptions>

                                <Descriptions.Item label="Delivery fee">$ 25.03</Descriptions.Item>
                            </Descriptions>

                        </div>
                        <div>
                            <Row className='line3'>
                                <Col span={8} offset={4}>

                                    <a style={{fontWeight: 'bold'}}>Payment</a>
                                </Col>

                                <Col>
                                    <p>
                                        <Select
                                            style={{ width: 240 }}
                                            placeholder="visa - 1234"
                                            dropdownRender={menu => (
                                                <div>
                                                    {menu}
                                                    <Divider style={{ margin: '4px 0' }} />
                                                    <div
                                                        style={{ padding: '4px 8px', cursor: 'pointer' }}
                                                        onMouseDown={e => e.preventDefault()}
                                                        onClick={this.addItem}
                                                    >

                                                    </div>
                                                </div>
                                            )}
                                        >
                                            {items.map(item => (
                                                <Option key={item}>{item}</Option>
                                            ))}
                                        </Select>
                                    </p>
                                    <p><div
                                        style={{ padding: '4px 8px', cursor: 'pointer' }}
                                        onMouseDown={e => e.preventDefault()}
                                        onClick={this.addItem}
                                    >
                                    </div>
                                        <Button><Icon type="plus" /> Add Payment Method</Button></p>

                                </Col>
                            </Row>
                        </div>
                        {/*<div>*/}
                        {/*    <Descriptions>*/}

                        {/*        <Descriptions.Item label="Payment">*/}
                        {/*            <p>*/}

                        {/*                <Select*/}
                        {/*                    style={{ width: 240 }}*/}
                        {/*                    placeholder="visa - 1234"*/}
                        {/*                    dropdownRender={menu => (*/}
                        {/*                        <div>*/}
                        {/*                            {menu}*/}
                        {/*                            <Divider style={{ margin: '4px 0' }} />*/}
                        {/*                            <div*/}
                        {/*                                style={{ padding: '4px 8px', cursor: 'pointer' }}*/}
                        {/*                                onMouseDown={e => e.preventDefault()}*/}
                        {/*                                onClick={this.addItem}*/}
                        {/*                            >*/}

                        {/*                            </div>*/}
                        {/*                        </div>*/}
                        {/*                    )}*/}
                        {/*                >*/}
                        {/*                    {items.map(item => (*/}
                        {/*                        <Option key={item}>{item}</Option>*/}
                        {/*                    ))}*/}
                        {/*                </Select>*/}
                        {/*            </p>*/}
                        {/*            <p>*/}
                        {/*                <div*/}
                        {/*                    style={{ padding: '4px 8px', cursor: 'pointer' }}*/}
                        {/*                    onMouseDown={e => e.preventDefault()}*/}
                        {/*                    onClick={this.addItem}*/}
                        {/*                >*/}
                        {/*                    </div>*/}
                        {/*                <Button><Icon type="plus" /> Add Payment Method</Button>*/}
                        {/*            </p>*/}
                        {/*        </Descriptions.Item>*/}
                        {/*    </Descriptions>*/}

                        {/*</div>*/}

                    </div>
                </div>

            </div>
        );
    }
}

export default SuccessInfo;


