import React from 'react'
import { Form, Input, Button } from 'antd';
import fb_icon from '../../assets/images/fb_icon.svg';
import google_icon from '../../assets/images/google_icon.svg';
import twitter_icon from '../../assets/images/twitter_icon.svg';
import close_icon1 from '../../assets/images/close_icon1.svg';
import close_icon2 from '../../assets/images/close_icon2.svg';
import './SignIn.css';

import Axios from 'axios';
import { Formik } from "formik";

/* CODE FOR CONNECTING FRONT-BACKEND, PLEASE DON'T REMOVE 
const REST_API_URL = 'http://locohost:8081/api/users';

// import { Link } from 'react-router-dom';

function ValidatedLogin(props) {
    Axios.init();

    const ValidatedLoginForm = () => (
        <Formik
        initialValues={{ email: "", password: "", LoginStatus: "" }}
        onSubmit={(values, { setSubmitting, setFieldValue, setErrors }) => {
          Axios.post(REST_API_URL, {
            Email: values.email,
            Password: values.password,
          }).then((response) => {
            if (response.data.message) {
              //console.log(response.data.message);
              setFieldValue('LoginStatus', response.data.message);
              props.LoginStatusCallBack(false);
            }else {
              //console.log("username is ",response.data.username )
              //history.push("/welcome", { username: response.data.username });
              props.LoginStatusCallBack(true);
              //console.log("here is received data:", response.data);
              props.UserInfoCallBack(response.data[0]);
              //setFieldValue('LoginStatus', response.data);
            }
            //console.log(response);
          }
    );

    setTimeout(() => {
        setSubmitting(false);
    }, 500);
}
*/ 

class SignInForm extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form;

        return (  
                <Form className="signIn">                    
                    <Form.Item>
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