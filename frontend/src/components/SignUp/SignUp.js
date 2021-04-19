import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import fb_icon from '../../assets/images/fb_icon.svg';
import google_icon from '../../assets/images/google_icon.svg';
import twitter_icon from '../../assets/images/twitter_icon.svg';
import close_icon1 from '../../assets/images/close_icon1.svg';
import close_icon2 from '../../assets/images/close_icon2.svg';
import './SignUp.css';
import axios from 'axios';

// import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {

//     componentDidMount(){
//         const user = {
//             "Email": "123@gmail.com",
//             "LastName": "aaaa",
//             "FirstName": "bbbb",
//             "Password": "123"
//           }
//         axios.put('http://localhost:8081/signup', user)
//         .then(res => {
//             if (this._isMounted) {
//                 this.setState(res.data, () => {
//                     if (this.state.isSuccess) {
//                         alert("request has been submitted");
//                         this.props.history.push("/thanksForOrdering");
//                     }
//                 })
//             }
//         })
//         .catch(error => {
//             console.error(error);
//         });
// }
//     }


    render() {
        const { getFieldDecorator } = this.props.form;

        return (              
            <Form className="signUp">                    
                <Form.Item>
                    <span className="signUp-title">Sign up your account</span>
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
                    {getFieldDecorator('firstname', {
                        rules: [{ required: true, message: 'Please input your firstname!' }],
                    })(
                        <Input
                            style={{background:'#F5F5F5'}}
                            placeholder="Enter firstname"
                        />,
                    )}
                </Form.Item>
                <Form.Item> 
                    {getFieldDecorator('lastname', {
                        rules: [{ required: true, message: 'Please input your lastname!' }],
                    })(
                        <Input
                            style={{background:'#F5F5F5'}}
                            placeholder="Enter lastname"
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
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                        initialValue: false,
                        rules: [{ required: true, message: 'Please check the policy!' }],
                    })(<Checkbox className="check-box">I accept Jiffy <a href="">terms of service</a> and acknowledge the Privacy Policy.</Checkbox>)}
                </Form.Item>
                <Form.Item> 
                    <Button htmlType="submit" className="singUp-button">Sign up</Button>
                </Form.Item>     
                <Form.Item className="signUp-icon"> 
                    <span className="signUp-icon-text">Or you can sign in with</span>
                    <div>
                        <img src={ google_icon } className="gg-logo" />
                        <img src={ fb_icon } className="fb-logo" /> 
                        <img src={ twitter_icon } className="tw-logo" />
                    </div>
                    <span className="signUp-icon-ask">Already have an account? <a href="">Sign in</a></span>
                </Form.Item>
            </Form>
        )
    }
}

const SignUp = Form.create()(SignUpForm);

export default SignUp;