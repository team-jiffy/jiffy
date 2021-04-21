import React from 'react'
import { Form, Input, Button } from 'antd';
import fb_icon from '../../assets/images/fb_icon.svg';
import google_icon from '../../assets/images/google_icon.svg';
import twitter_icon from '../../assets/images/twitter_icon.svg';
import './SignIn.css';
import axios from 'axios';

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



class SignInFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: "",
            Password: "",
            status: "",
            userName: ""
        }
    }

    handleSubmit = event => {

        event.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("values => ", values);
                axios({
                    method: 'post',
                    url: 'http://localhost:8081/signin',
                    data: values,
                }).then(
                    response => {
                        console.log('Login reponse => ', response);
                        console.log('Login.data => ', response.data);
                        var username = response.data.user.firstName; 
                        // console.log("username" + username);

                        if (response.data.status === "OK" || response.data.message === "Success!") {
                            // TODO: Switch to UserHeader Component
                         localStorage.setItem('currUser', username.toUpperCase());
                         console.log(localStorage.getItem("currUser"));

                         localStorage.setItem("UID", response.data.user.uid);
                         console.log("props: ",this.props)


                          this.setState({userName: username})
                          this.props.setModal1Visible();
                          this.props.showUserHeaderHandler();
                         
                        } else {
                            alert("Email and Password not match!");


                        }
                    }
                ).catch(
                    error => {
                        console.log('Login error ->  ', error);
                    }
                )
            }
        })
    }




    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form className="signIn" onSubmit={this.handleSubmit}>
                <Form.Item>
                    <span className="signIn-title">Please sign in to your account</span>
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('Email', {
                        rules: [{ required: true, message: 'Please input your email!' }],
                    })(
                        <Input
                            style={{ background: '#F5F5F5' }}
                            placeholder="Enter email"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('Password', {
                        rules: [{ required: true, message: 'Please input your password!' }],
                    })(
                        <Input
                            style={{ background: '#F5F5F5' }}
                            placeholder="Enter password"
                        />,
                    )}
                </Form.Item>
        
                <div style={{textAlign: "center"}}>
                    <Button htmlType="submit" className="singIn-button" style={{marginTop: "-10px"}}>Sign in</Button>
                    <div><b>Or you can sign in with</b></div>
                    <div>
                        <img src={google_icon} className="gg-logo" alt="gg" />
                        <img src={fb_icon} className="fb-logo" alt="fb" />
                        <img src={twitter_icon} className="tw-logo" alt="tw" />
                    </div>
                    <span className="signUp-icon-ask">Can’t log in? <a href="">Sign up </a>for an account</span>
                </div>
            </Form>
        )
    }
}

const SignIn = Form.create()(SignInFrom);

export default SignIn;