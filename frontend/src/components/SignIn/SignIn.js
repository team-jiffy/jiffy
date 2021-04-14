import React from 'react'
import { Form, Input, Button } from 'antd';
import fb_icon from '../../assets/images/fb_icon.svg';
import google_icon from '../../assets/images/google_icon.svg';
import twitter_icon from '../../assets/images/twitter_icon.svg';
import close_icon1 from '../../assets/images/close_icon1.svg';
import close_icon2 from '../../assets/images/close_icon2.svg';
import './SignIn.css';

// import { Link } from 'react-router-dom';

class SignInForm extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form;

        return (  
                <Form className="signIn">                    
                    <Form.Item>
                        <img src={ close_icon1 } className="close-logo1" alt="c1" />
                        <img src={ close_icon2 } className="close-logo2" alt="c2" />
                        <span className="signIn-title">Please sign in to your account</span>
                    </Form.Item>
                    <Form.Item> 
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Please input your email!' }],
                        })(
                            <Input
                                style={{background:'#F5F5F5'}}
                                placeholder="Enter email"
                            />,
                        )}
                    </Form.Item>                           
                    <Form.Item> 
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your password!' }],
                        })(
                            <Input
                                style={{background:'#F5F5F5'}}
                                placeholder="Enter password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item> 
                        <Button htmlType="submit" className="singIn-button">
                            Sign in
                        </Button>
                    </Form.Item>     
                    <Form.Item className="sigIn-icon"> 
                        <span className="signUp-icon-text">Or you can sign in with</span>
                        <div>
                            <img src={ google_icon } className="gg-logo" alt="gg" />
                            <img src={ fb_icon } className="fb-logo" alt="fb" /> 
                            <img src={ twitter_icon } className="tw-logo" alt="tw" />
                        </div>
                        <span className="signUp-icon-ask">Can’t log in? <a href="">Sign up </a>for an account</span>
                    </Form.Item>
                </Form>
        )
    }
}

const SignIn = Form.create()(SignInForm);

export default SignIn;